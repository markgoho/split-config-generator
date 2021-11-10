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

  it('Should create a split config with just one group', () => {
    const report = [
      ...fileWithRuntime1,
      ...fileWithRuntime2,
      ...fileWithRuntime3,
    ];

    const splitConfig: FileGroup[] = createSplitConfig(report);

    expect(splitConfig.length).toBe(8);
  });

  it('Should create a split config with manual group override', () => {
    const report = [
      ...fileWithRuntime1,
      ...fileWithRuntime2,
      ...fileWithRuntime3,
    ];

    const splitConfig: FileGroup[] = createSplitConfig(report, 5);

    expect(splitConfig.length).toBe(5);
  });

  it('Should create a split config with a very simple example', () => {
    const splitConfig: FileGroup[] = createSplitConfig(contrivedExample);

    expect(splitConfig.length).toBe(3);
  });

  it('Should create a split config with a very simple example', () => {
    const splitConfig: FileGroup[] = createSplitConfig(contrivedExample, 2);

    expect(splitConfig.length).toBe(2);
  });

  it('Should create a split config with a real world example', () => {
    const splitConfig: FileGroup[] = createSplitConfig(realWorldExample);

    expect(splitConfig.length).toBe(5);
  });
});
