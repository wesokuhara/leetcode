/**
Count the number of prime numbers less than a non-negative number, n.

Example:

Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
*/

const { countPrimes } = require('./index');

describe('204. Count Primes', () => {
  it('should count the number of primes', () => {
    const n = 10;
    const expected = 4;
    const result = countPrimes(n);
    expect(result).toEqual(expected);
  });
});
