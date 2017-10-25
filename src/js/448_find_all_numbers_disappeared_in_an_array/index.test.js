/**
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array),
some elements appear twice and others appear once.
Find all the elements of [1, n] inclusive that do not appear in this array.
Could you do it without extra space and in O(n) runtime?
You may assume the returned list does not count as extra space.

Example:
Input:
[4,3,2,7,8,2,3,1]
Output:
[5,6]
*/

const { findDisappearedNumbers } = require('./index');

describe('448. Find All Numbers Disappeared in an Array', () => {
  it('should find all numbers missing', () => {
    const nums = [];
    const expected = [];

    const result = findDisappearedNumbers(nums);
    expect(result).toEqual(expected);
  });

  it('should find all numbers missing', () => {
    const nums = [4, 3, 2, 7, 8, 2, 3, 1];
    const expected = [5, 6];

    const result = findDisappearedNumbers(nums);
    expect(result).toEqual(expected);
  });

  it('should find all numbers missing', () => {
    const nums = [1, 1, 1, 1, 1];
    const expected = [2, 3, 4, 5];

    const result = findDisappearedNumbers(nums);
    expect(result).toEqual(expected);
  });
});
