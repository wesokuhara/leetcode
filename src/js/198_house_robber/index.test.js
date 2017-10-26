/**
You are a professional robber planning to rob houses along a street.
Each house has a certain amount of money stashed, the only constraint stopping
you from robbing each of them is that adjacent houses have security system
connected, and it will automatically contact the police if two adjacent houses
were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each
house, determine the maximum amount of money you can rob tonight without
alerting the police.
*/

const { rob } = require('./index');

describe('198. House Robber', () => {
  it('should rob the maximum amount', () => {
    const nums = [1, 10, 3, 5];
    const expected = 15;

    const result = rob(nums);
    expect(result).toBe(expected);
  });

  it('should rob the maximum amount', () => {
    const nums = [99, 100];
    const expected = 100;

    const result = rob(nums);
    expect(result).toBe(expected);
  });

  it('should rob the maximum amount', () => {
    const nums = [];
    const expected = 0;

    const result = rob(nums);
    expect(result).toBe(expected);
  });

  it('should rob the maximum amount', () => {
    const nums = [1];
    const expected = 1;

    const result = rob(nums);
    expect(result).toBe(expected);
  });
});
