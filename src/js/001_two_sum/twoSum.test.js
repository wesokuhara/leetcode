/**
Given an array of integers, return indices of the two numbers such that they
add up to a specific target. You may assume that each input
would have exactly one solution.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

const twoSum = require('./twoSum');

describe('1. Two Sum', () => {
  it('should return the indices of two numbers that add up to the target', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;

    const result = twoSum(nums, target);
    expect(result).toEqual([0, 1]);
  });

  it('should return the indices of two numbers that add up to the target', () => {
    const nums = [0, 4, 3, 0];
    const target = 0;

    const result = twoSum(nums, target);
    expect(result).toEqual([0, 3]);
  });
});
