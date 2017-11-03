/**
The Hamming distance between two integers is the number of positions at which
the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 2^31.

Example:
Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
*/

const { hammingDistance } = require('./index');

describe('461. Hamming Distance', () => {
  it('it should calculate the hamming distance', () => {
    const x = 1;
    const y = 4;

    const result = hammingDistance(x, y);
    expect(result).toBe(2);
  });

  it('it should calculate the hamming distance', () => {
    const x = 1;
    const y = 3;

    const result = hammingDistance(x, y);
    expect(result).toBe(1);
  });

  it('it should calculate the hamming distance', () => {
    const x = 4;
    const y = 1;

    const result = hammingDistance(x, y);
    expect(result).toBe(2);
  });
});
