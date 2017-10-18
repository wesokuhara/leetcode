/**
Given an array consisting of n integers, find the contiguous subarray of given
length k that has the maximum average value. And you need to output the maximum
average value.

Example 1:
Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
Note:
1 <= k <= n <= 30,000.
Elements of the given array will be in the range [-10,000, 10,000].
*/

const { findMaxAverage } = require('./index');

describe('643. Maximum Average Subarray 1', () => {
  it('should find the maximum average value', () => {
    const nums = [1, 12, -5, -6, 50, 3];
    const k = 4;

    const result = findMaxAverage(nums, k);
    expect(result).toBe(12.75);
  });

  it('should find the maximum average value', () => {
    const nums = [0, 1, 2, 3, 4, 5, 6];
    const k = 4;

    const result = findMaxAverage(nums, k);
    expect(result).toBe(4.5);
  });

  it('should find the maximum average value', () => {
    const nums = [-1];
    const k = 1;

    const result = findMaxAverage(nums, k);
    expect(result).toBe(-1);
  });
});
