/**
Given an array of integers, find if the array contains any duplicates.
Your function should return true if any value appears at least twice in the array,
and it should return false if every element is distinct.
*/

const { containsDuplicate, containsDuplicateSorting } = require('./index');

describe('217. Contains Duplicate', () => {
  describe('Hash Map', () => {
    it('should identify a duplicate', () => {
      const nums = [1, 2, 3, 4, 4];

      const result = containsDuplicate(nums);
      expect(result).toBe(true);
    });

    it('should return false', () => {
      const nums = [1, 2, 3, 4, 5];

      const result = containsDuplicate(nums);
      expect(result).toBe(false);
    });
  });

  describe('Sorting', () => {
    it('should identify a duplicate', () => {
      const nums = [1, 2, 3, 4, 4];

      const result = containsDuplicateSorting(nums);
      expect(result).toBe(true);
    });

    it('should return false', () => {
      const nums = [1, 2, 3, 4, 5];

      const result = containsDuplicateSorting(nums);
      expect(result).toBe(false);
    });
  });
});
