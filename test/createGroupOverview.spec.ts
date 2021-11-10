import { createGroupOverview } from '../src/create-group-overview';
import { fileGroups } from './mocks';

describe('Group Overview', () => {
  it('Should produce a group overview', () => {
    expect(createGroupOverview(fileGroups)).toStrictEqual([
      { groupNumber: 1, numberOfFiles: 26, totalRunTime: 70 },
      { groupNumber: 2, numberOfFiles: 26, totalRunTime: 330 },
      { groupNumber: 3, numberOfFiles: 26, totalRunTime: 6486970 },
    ]);
  });
});
