/**
Given an array nums, write a function to move all 0's to the end of it
while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function,
nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

const { moveZeroes } = require('./index');

describe('283. Move Zeroes', () => {
  it('should move zeroes to the end of the array', () => {
    const nums = [0, 1, 0, 3, 12];
    const expected = [1, 3, 12, 0, 0];

    moveZeroes(nums);
    expect(nums).toEqual(expected);
  });

  it('should move zeroes to the end of the array', () => {
    const nums = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];

    moveZeroes(nums);
    expect(nums).toEqual(expected);
  });

  it('should move zeroes to the end of the array', () => {
    const nums = [1, 2, 0];
    const expected = [1, 2, 0];

    moveZeroes(nums);
    expect(nums).toEqual(expected);
  });
});
