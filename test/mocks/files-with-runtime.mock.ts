import { FilesWithRuntime } from '../../src';

import { fileWithRuntime1 } from './file-with-runtime-1.mock';
import { fileWithRuntime2 } from './file-with-runtime-2.mock';
import { fileWithRuntime3 } from './file-with-runtime-3.mock';

export const filesWithRuntime1: FilesWithRuntime = {
  files: fileWithRuntime1,
};
export const filesWithRuntime2: FilesWithRuntime = {
  files: fileWithRuntime2,
};
export const filesWithRuntime3: FilesWithRuntime = {
  files: fileWithRuntime3,
};

export const fileGroups: FilesWithRuntime[] = [
  filesWithRuntime1,
  filesWithRuntime2,
  filesWithRuntime3,
];
