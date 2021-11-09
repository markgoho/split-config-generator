import { getGroupRuntime } from '../src';
import {
  fileWithRuntime1,
  fileWithRuntime2,
  fileWithRuntime3,
} from './mocks';

describe('Group Runtime', () => {
  it('Should calculate the runtime of a group', () => {

    expect(getGroupRuntime(fileWithRuntime1)).toBe(70);
  });

  it('Should calculate the runtime of a group', () => {
    expect(getGroupRuntime(fileWithRuntime2)).toBe(330);
  });

  it('Should calculate the runtime of a group', () => {
    expect(getGroupRuntime(fileWithRuntime3)).toBe(335.98);
  });
});
