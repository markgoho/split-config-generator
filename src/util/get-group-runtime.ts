import { FileWithRuntime } from '../models';

export const getGroupRuntime = (
  files: (FileWithRuntime | undefined)[],
): number => {
  // eslint-disable-next-line unicorn/no-array-reduce
  const rawRuntime = files.reduce((runtime, file) => {
    return file ? runtime + file.runtime : 0;
  }, 0);

  return rawRuntime;
};
