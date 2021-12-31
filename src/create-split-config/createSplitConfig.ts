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
  manualGroupCount?: number,
): FileGroup[] => {
  const files = [...filesWithRuntime];

  const { longestTest, totalRuntime, suggestedGroupCount } =
    runtimeDetails(files);

  let expectedGroupCount;

  if (
    manualGroupCount !== undefined &&
    manualGroupCount <= suggestedGroupCount
  ) {
    expectedGroupCount = manualGroupCount;
  } else {
    expectedGroupCount = suggestedGroupCount;
  }

  // console.log({ manualGroupCount, suggestedGroupCount, expectedGroupCount });

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
  if (manualGroupCount === undefined) {
    maxGroupRuntime = longestTest;
  } else {
    maxGroupRuntime = totalRuntime / expectedGroupCount;
  }

  // console.log({ maxGroupRuntime, longestTest });

  if (maxGroupRuntime < longestTest) {
    console.info(`The max group runtime is less than the longest test.`);
  }

  // The magic happens here
  groupRuntimes.forEach(async (group: FilesWithRuntime) => {
    while (getGroupRuntime(group.files) < maxGroupRuntime && files.length) {
      // start with file at front of array
      const largestFile = files[0];

      // test whether that file can be added to current group
      const largestFileIsAddable =
        largestFile.runtime + getGroupRuntime(group.files) <= maxGroupRuntime;

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
        smallestFile.runtime + getGroupRuntime(group.files) <= maxGroupRuntime;

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
