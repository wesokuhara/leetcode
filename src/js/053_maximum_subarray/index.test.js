/**
Find the contiguous subarray within an array (containing at least one number)
which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.
*/

const { maxSubArray } = require('./index');

describe('53. Maximum Subarray', () => {
  it('should compute the maxium subarray', () => {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

    const result = maxSubArray(nums);
    expect(result).toBe(6);
  });

  it('should compute the maxium subarray', () => {
    const nums = [1, 2, 3 - 100, 200];

    const result = maxSubArray(nums);
    expect(result).toBe(200);
  });

  it('should compute the maxium subarray', () => {
    const nums = [0];

    const result = maxSubArray(nums);
    expect(result).toBe(0);
  });
});
