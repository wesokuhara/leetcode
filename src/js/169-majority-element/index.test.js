/**
Given an array of size n, find the majority element.
The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always
exist in the array.

See also:
Boyer–Moore majority vote algorithm
*/

const { majorityElement, majorityElementOnePass } = require('./index');

describe('169. Majority Element', () => {
  describe('O(n) space', () => {
    it('should find the majority element', () => {
      const nums = [1, 3, 3, 2, 2, 3, 3];

      const result = majorityElement(nums);
      expect(result).toBe(3);
    });

    it('should find the majority element', () => {
      const nums = [1];

      const result = majorityElement(nums);
      expect(result).toBe(1);
    });
  });

  describe('One Pass', () => {
    it('should find the majority element', () => {
      const nums = [1, 3, 3, 2, 2, 3, 3];

      const result = majorityElementOnePass(nums);
      expect(result).toBe(3);
    });

    it('should find the majority element', () => {
      const nums = [1];

      const result = majorityElementOnePass(nums);
      expect(result).toBe(1);
    });
  });
});
