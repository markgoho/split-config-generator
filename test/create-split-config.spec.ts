import { describe, test, expect } from '@jest/globals';

import { createSplitConfig, FileGroup } from '../src';
import {
  fileWithRuntime1,
  fileWithRuntime2,
  fileWithRuntime3,
  realWorldExample,
  veryContrivedExample,
} from './mocks';

describe('Create Split Config', () => {
  const contrivedExample = [...veryContrivedExample];

  test('Should create a split config with just 8 groups', () => {
    const report = [
      ...fileWithRuntime1,
      ...fileWithRuntime2,
      ...fileWithRuntime3,
    ];

    const splitConfig: FileGroup[] = createSplitConfig(report);

    expect(splitConfig.length).toBe(8);
  });

  test('Should create a split config with manual group override', () => {
    const report = [
      ...fileWithRuntime1,
      ...fileWithRuntime2,
      ...fileWithRuntime3,
    ];

    const splitConfig: FileGroup[] = createSplitConfig(report, 5);

    expect(splitConfig.length).toBe(5);
  });

  test('Should create a split config with a very simple example', () => {
    const splitConfig: FileGroup[] = createSplitConfig(contrivedExample);

    expect(splitConfig.length).toBe(3);
  });

  test('Should create a split config with a very simple example', () => {
    const splitConfig: FileGroup[] = createSplitConfig(contrivedExample, 2);

    expect(splitConfig.length).toBe(2);
  });

  test('Should create a split config with a real world example', () => {
    const splitConfig: FileGroup[] = createSplitConfig(realWorldExample);

    expect(splitConfig.length).toBe(5);
  });

  test('Should create a split config with a real world example with manual group count', () => {
    const splitConfig: FileGroup[] = createSplitConfig(realWorldExample, 4);

    expect(splitConfig.length).toBe(4);
  });

  test('Should create a split config with a manual group count that is higher than what it should be', () => {
    // Here the suggested group count is 5, but the manual group count is 15
    // The suggested group count will be used instead
    const splitConfig: FileGroup[] = createSplitConfig(realWorldExample, 15);

    expect(splitConfig.length).toBe(5);
  });
});
