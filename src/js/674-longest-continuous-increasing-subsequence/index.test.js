const { findLengthOfLCIS } = require('./index');

describe('674. Longest COntinuous Increasing Subsequence', () => {
  it('should find the length of the LCIS', () => {
    const nums = [1, 3, 5, 4, 7];

    const result = findLengthOfLCIS(nums);
    expect(result).toBe(3);
  });

  it('should find the length of the LCIS', () => {
    const nums = [2, 2, 2, 2, 2];

    const result = findLengthOfLCIS(nums);
    expect(result).toBe(1);
  });

  it('should find the length of the LCIS', () => {
    const nums = [1, 3, 5, 7];

    const result = findLengthOfLCIS(nums);
    expect(result).toBe(4);
  });

  it('should find the length of the LCIS', () => {
    const nums = [];

    const result = findLengthOfLCIS(nums);
    expect(result).toBe(0);
  });

  it('should find the length of the LCIS', () => {
    const nums = [1, 3, 5, 4, 2, 3, 4, 5];

    const result = findLengthOfLCIS(nums);
    expect(result).toBe(4);
  });
});
