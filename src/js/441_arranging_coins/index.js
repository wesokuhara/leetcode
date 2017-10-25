const arrangeCoins = n => {
  let i = 1;

  while (i <= n) {
    n -= i;
    i++;
  }

  return i - 1;
};

module.exports = {
  arrangeCoins
};
