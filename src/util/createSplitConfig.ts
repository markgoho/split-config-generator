import { FilesWithRuntime, FileWithRuntime, FileGroup } from '../models';

export const createFileGroups = (
  groupRunTimes: FilesWithRuntime[],
): FileGroup[] => {
  return groupRunTimes.map((group) => {
    return {
      files: group.files.map((file) => (file as FileWithRuntime).filePath),
    };
  });
};
