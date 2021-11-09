import { createSplitConfig, FileGroup, FileWithRuntime } from '../src';

describe('Create Split Config', () => {
  it('Should create a split config from a list of files with runtimes', () => {
    const files: FileWithRuntime[] = [
      {
        filePath: 'file1.ts',
        runtime: 35435353,
      },
      {
        filePath: 'file2.ts',
        runtime: 46545435,
      },
      {
        filePath: 'file3.ts',
        runtime: 54654365,
      },
      {
        filePath: 'file4.ts',
        runtime: 65465465,
      },
    ];

    const splitConfig: FileGroup[] = createSplitConfig(files);

    expect(splitConfig.length).toBe(4);

    expect(splitConfig).toStrictEqual([
      {
        files: ['file4.ts'],
      },
      {
        files: ['file3.ts'],
      },
      {
        files: ['file2.ts'],
      },
      {
        files: ['file1.ts'],
      },
    ]);
  });
});
