import { FilesWithRuntime, FileWithRuntime, SplitConfig } from '../models';

export const createSplitConfigFromGroups = (
  groupRunTimes: FilesWithRuntime[],
): SplitConfig => {
  return groupRunTimes.map((group) => {
    return {
      files: group.files.map((file) => (file as FileWithRuntime).filePath),
    };
  });
};
