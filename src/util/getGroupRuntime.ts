import { FileWithRuntime } from '../models';

export const getGroupRuntime = (
  files: (FileWithRuntime | undefined)[],
): number => {
  const rawRuntime = files.reduce((runtime, file) => {
    return file ? runtime + file.runtime : 0;
  }, 0);

  return rawRuntime;
};
