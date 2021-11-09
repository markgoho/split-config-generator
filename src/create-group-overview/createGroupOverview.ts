import { FilesWithRuntime, GroupOverview } from '../models';
import { getGroupRuntime } from '../util';

export const createGroupOverview = (
  groupRunTimes: FilesWithRuntime[],
): GroupOverview[] => {
  return groupRunTimes.map((group, index) => {
    const totalRunTime = getGroupRuntime(group.files);

    return {
      groupNumber: index + 1,
      numberOfFiles: group.files.length,
      totalRunTime,
    };
  });
};
