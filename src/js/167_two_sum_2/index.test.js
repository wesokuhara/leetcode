/**
Given an array of integers that is already sorted in ascending order, find two
numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add
up to the target, where index1 must be less than index2. Please note that your
returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution and you may not
use the same element twice.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2
*/

const { twoSum } = require('./index');

describe('167. Two Sum II', () => {
  it('should return the indices of two summands', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const expected = [1, 2];

    const result = twoSum(nums, target);
    expect(result).toEqual(expected);
  });

  it('should return the indices of two summands', () => {
    const nums = [0, 1];
    const target = 1;
    const expected = [1, 2];

    const result = twoSum(nums, target);
    expect(result).toEqual(expected);
  });

  it('should return the indices of two summands', () => {
    const nums = [-1, 0, 1];
    const target = 0;
    const expected = [1, 3];

    const result = twoSum(nums, target);
    expect(result).toEqual(expected);
  });

  it('should return the indices of two summands', () => {
    const nums = [];
    const target = 0;
    const expected = [];

    const result = twoSum(nums, target);
    expect(result).toEqual(expected);
  });
});
