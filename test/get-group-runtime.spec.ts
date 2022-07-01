import { describe, test, expect } from '@jest/globals';

import { getGroupRuntime } from '../src/util';
import { fileWithRuntime1, fileWithRuntime2, fileWithRuntime3 } from './mocks';

describe('Group Runtime', () => {
  test('Should calculate the runtime of a group', () => {
    expect(getGroupRuntime(fileWithRuntime1)).toBe(70);
  });

  test('Should calculate the runtime of a group', () => {
    expect(getGroupRuntime(fileWithRuntime2)).toBe(330);
  });

  test('Should calculate the runtime of a group', () => {
    expect(getGroupRuntime(fileWithRuntime3)).toBe(6_486_970);
  });
});
