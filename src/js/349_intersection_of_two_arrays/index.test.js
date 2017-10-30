/**
Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.
*/

const { intersection } = require('./index');

describe('349. Intersection of Two Arrays', () => {
  it('should return the intersections of the arrays', () => {
    const nums1 = [1, 2, 2, 1];
    const nums2 = [2, 2];
    const expected = [2];

    const result = intersection(nums1, nums2);
    expect(result).toEqual(expected);
  });

  it('should return the intersections of the arrays', () => {
    const nums1 = [1, 2, 2, 1];
    const nums2 = [1, 2];
    const expected = [1, 2];

    const result = intersection(nums1, nums2);
    expect(result).toEqual(expected);
  });

  it('should return an empty array', () => {
    const nums1 = [1, 2];
    const nums2 = [3, 4];
    const expected = [];

    const result = intersection(nums1, nums2);
    expect(result).toEqual(expected);
  });

  it('should return an empty array', () => {
    const nums1 = [];
    const nums2 = [];
    const expected = [];

    const result = intersection(nums1, nums2);
    expect(result).toEqual(expected);
  });
});
