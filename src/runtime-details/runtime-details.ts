import { FileWithRuntime } from '../models';
import { getGroupRuntime } from '../util';

/**
 * Reads file array and returns details about the
 * nature of the set of files
 * @param files an array of files with runtime
 */
export const runtimeDetails = (files: FileWithRuntime[]) => {
  const [longestTest] = files.sort((a, b) => (a.runtime > b.runtime ? -1 : 1));
  const totalRuntime = getGroupRuntime(files);

  const suggestedGroupCount = Math.ceil(totalRuntime / longestTest.runtime);

  return {
    longestTest: longestTest.runtime,
    longestTestName: longestTest.filePath,
    totalRuntime,
    suggestedGroupCount,
  };
};
