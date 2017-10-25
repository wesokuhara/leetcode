/**
You have a total of n coins that you want to form in a staircase shape,
where every k-th row must have exactly k coins.
Given n, find the total number of full staircase rows that can be formed.
n is a non-negative integer and fits within the range of a 32-bit signed integer.

Example 1:
n = 5
The coins can form the following rows:
¤
¤ ¤
¤ ¤
Because the 3rd row is incomplete, we return 2.

Example 2:
n = 8
The coins can form the following rows:
¤
¤ ¤
¤ ¤ ¤
¤ ¤
Because the 4th row is incomplete, we return 3.
*/

const { arrangeCoins } = require('./index');

describe('441. Arranging Coins', () => {
  it('should return the number of full rows that can be arranged', () => {
    const n = 5;

    const result = arrangeCoins(n);
    expect(result).toBe(2);
  });

  it('should return the number of full rows that can be arranged', () => {
    const n = 8;

    const result = arrangeCoins(n);
    expect(result).toBe(3);
  });

  it('should return the number of full rows that can be arranged', () => {
    const n = 6;

    const result = arrangeCoins(n);
    expect(result).toBe(3);
  });

  it('should return the number of full rows that can be arranged', () => {
    const n = 0;

    const result = arrangeCoins(n);
    expect(result).toBe(0);
  });
});
