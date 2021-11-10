import {
  FileGroup,
  FilesWithRuntime,
  FileWithRuntime,
  SplitConfig,
} from '../models';
import { runtimeDetails } from '../runtime-details';
import { createFileGroups, getGroupRuntime } from '../util';

export const createSplitConfig = (
  filesWithRuntime: FileWithRuntime[],
  groupCount?: number,
): FileGroup[] => {
  const files = [...filesWithRuntime];

  const { longestTest, totalRuntime, suggestedGroupCount } =
    runtimeDetails(files);

  const expectedGroupCount = groupCount ?? suggestedGroupCount;

  const groupRuntimes: FilesWithRuntime[] = Array.from(
    { length: expectedGroupCount },
    () => ({
      files: [],
    }),
  );

  // The total runtime of a group is limited based on either:
  // 1. The longest test if the suggested group count is used
  // 2. The total runtime of all the tests divided by the manual group count
  let maxGroupRuntime: number;
  if (groupCount === undefined) {
    maxGroupRuntime = longestTest;
  } else {
    maxGroupRuntime = totalRuntime / expectedGroupCount;
  }

  if (maxGroupRuntime < longestTest) {
    console.error(`The max group runtime is less than the longest test.`);
    console.error(`Decrease group count or run without a second argument.`);
  }

  // The magic happens here
  groupRuntimes.forEach(async (group: FilesWithRuntime) => {
    while (getGroupRuntime(group.files) < longestTest && files.length) {
      // start with file at front of array
      const largestFile = files[0];

      // test whether that file can be added to current group
      const largestFileIsAddable =
        largestFile.runtime + getGroupRuntime(group.files) <= longestTest;

      // if that file can be added, add it
      if (largestFileIsAddable) {
        const file = files.shift();
        group.files.push(file);
      }

      if (files.length === 0) {
        break;
      }

      const smallestFile: FileWithRuntime = files[files.length - 1];

      const smallestFileIsAddable =
        smallestFile.runtime + getGroupRuntime(group.files) <= longestTest;

      if (smallestFileIsAddable) {
        const file = files.pop();
        group.files.push(file);
      } else {
        break;
      }
    }

    // console.log('Group', index + 1, 'has', group.files.length, 'files.');
    // console.log('==================================================');
  });

  // console.log('Files left', files.length);

  // const overview = createGroupOverview(groupRunTimes);
  // console.log(overview);

  const a: SplitConfig = createFileGroups(groupRuntimes);

  return a;
};
