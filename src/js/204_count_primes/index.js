/**
 * @param {number} n
 * @return {number}
 */
function countPrimes(n) {
  // generate a map from 2 to n-1 with all numbers being prime by default
  const primes = {};
  for (let i = 2; i < n; i++) {
    primes[i] = true;
  }

  for (let i = 2; i < n; i++) {
    // if this is a prime number, all multiples are not prime
    // 2 is always a prime number
    if (primes[i]) {
      for (let j = i * 2; j < n; j += i) {
        primes[j] = false;
      }
    }
  }

  let numPrimes = 0;
  for (let i = 2; i < n; i++) {
    if (primes[i] === true) numPrimes++;
  }

  return numPrimes;
}

module.exports = {
  countPrimes
};
