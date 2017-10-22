/**
Given an array of integers, every element appears twice except for one.
Find that single one.
Note:
Your algorithm should have a linear runtime complexity.
Could you implement it without using extra memory?
*/

const { singleNumber, singleNumberXor } = require('./index');

describe('136. Single Number', () => {
  it('should return the single number', () => {
    const nums = [1, 1, 2, 2, 3, 3, 4];
    const expected = 4;

    const result = singleNumber(nums);
    expect(result).toBe(expected);
  });

  it('should return the single number', () => {
    const nums = [1, 1, 2, 2, 3, 3, 4];
    const expected = 4;

    const result = singleNumberXor(nums);
    expect(result).toBe(expected);
  });
});
