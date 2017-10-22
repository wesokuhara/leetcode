/**
Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000
*/

const { maxConsecutiveOnes } = require('./index');

describe('485. Max Consecutive Ones', () => {
  it('should return the maximum consecutive ones', () => {
    const nums = [1, 1, 0, 1, 1, 1];

    const result = maxConsecutiveOnes(nums);
    expect(result).toBe(3);
  });

  it('should return the maximum consecutive ones', () => {
    const nums = [1];

    const result = maxConsecutiveOnes(nums);
    expect(result).toBe(1);
  });

  it('should return the maximum consecutive ones', () => {
    const nums = [];

    const result = maxConsecutiveOnes(nums);
    expect(result).toBe(0);
  });
});
