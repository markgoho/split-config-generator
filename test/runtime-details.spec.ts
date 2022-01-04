import { runtimeDetails } from '../src/runtime-details';
import {
  fileWithRuntime1,
  fileWithRuntime2,
  fileWithRuntime3,
  veryContrivedExample,
} from './mocks';

describe('Runtime Details', () => {
  it('Should provide runtime details about a group of files', () => {
    const { longestTest, longestTestName, suggestedGroupCount, totalRuntime } =
      runtimeDetails(fileWithRuntime1);

    expect(longestTest).toBeCloseTo(5);
    expect(longestTestName).toBe('e.ts');
    expect(suggestedGroupCount).toBe(14);
    expect(totalRuntime).toBeCloseTo(70);
  });

  it('Should provide runtime details about a group of files', () => {
    const { longestTest, longestTestName, suggestedGroupCount, totalRuntime } =
      runtimeDetails(fileWithRuntime2);

    expect(longestTest).toBeCloseTo(15);
    expect(longestTestName).toBe('e1.ts');
    expect(suggestedGroupCount).toBe(22);
    expect(totalRuntime).toBeCloseTo(330);
  });

  it('Should provide runtime details about a group of files', () => {
    const { longestTest, longestTestName, suggestedGroupCount, totalRuntime } =
      runtimeDetails(fileWithRuntime3);

    expect(longestTest).toBeCloseTo(913_345);
    expect(longestTestName).toBe('1f1.ts');
    expect(suggestedGroupCount).toBe(8);
    expect(totalRuntime).toBeCloseTo(6_486_970);
  });

  it('Should provide runtime details about a group of files', () => {
    const { longestTest, longestTestName, suggestedGroupCount, totalRuntime } =
      runtimeDetails(veryContrivedExample);

    expect(longestTest).toBeCloseTo(10);
    expect(longestTestName).toBe('a.rb');
    expect(suggestedGroupCount).toBe(3);
    expect(totalRuntime).toBeCloseTo(21);
  });
});
