/**
Given an array S of n integers, are there elements a, b, c in S such that
a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note: The solution set must not contain duplicate triplets.

For example, given array S = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

const { threeSum } = require('./index');

describe('15. 3Sum', () => {
  it('should return a list of the values that sum to 0', () => {
    const nums = [-1, 0, 1, 2, -1, -4];
    const expected = [[-1, -1, 2], [-1, 0, 1]];

    const result = threeSum(nums);
    expect(result).toEqual(expected);
  });

  it('should return a list of the values that sum to 0', () => {
    const nums = [0, 0, 0];
    const expected = [[0, 0, 0]];

    const result = threeSum(nums);
    expect(result).toEqual(expected);
  });

  it('should return a list of the values that sum to 0', () => {
    const nums = [0, 0, 0, 0];
    const expected = [[0, 0, 0]];

    const result = threeSum(nums);
    expect(result).toEqual(expected);
  });

  it('should return a list of the values that sum to 0', () => {
    const nums = [0, 0, 0, 0];
    const expected = [[0, 0, 0]];

    const result = threeSum(nums);
    expect(result).toEqual(expected);
  });

  it('should return a list of the values that sum to 0', () => {
    const nums = [-2, 0, 0, 2, 2];
    const expected = [[-2, 0, 2]];

    const result = threeSum(nums);
    expect(result).toEqual(expected);
  });
});
