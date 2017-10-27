/**
Given a positive integer, output its complement number.
The complement strategy is to flip the bits of its binary representation.

Note:
The given integer is guaranteed to fit within the range of a 32-bit signed integer.
You could assume no leading zero bit in the integer’s binary representation.
Example 1:
Input: 5 (101)
Output: 2 (010)

Example 2:
Input: 1 (1)
Output: 0 (0)
*/

const { findComplement } = require('./index');

describe('476. Number Complement', () => {
  it('should get the complement', () => {
    const num = 5;

    const result = findComplement(num);
    expect(result).toBe(2);
  });

  it('should get the complement', () => {
    const num = 1;

    const result = findComplement(num);
    expect(result).toBe(0);
  });

  it('should get the complement', () => {
    const num = 0;

    const result = findComplement(num);
    expect(result).toBe(1);
  });

  it('should get the complement', () => {
    const num = 7;

    const result = findComplement(num);
    expect(result).toBe(0);
  });
});
