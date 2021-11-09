import { runtimeDetails } from '../src';
import { fileWithRuntime1, fileWithRuntime2, fileWithRuntime3 } from './mocks';

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

    expect(longestTest).toBeCloseTo(15.23);
    expect(longestTestName).toBe('1e1.ts');
    expect(suggestedGroupCount).toBe(23);
    expect(totalRuntime).toBeCloseTo(335.98);
  });
});
