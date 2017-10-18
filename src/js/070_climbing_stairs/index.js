const climbStairs = n => {
  if (n <= 1) return n;

  let a = 1;
  let b = 2;

  for (let i = 2; i < n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  return b;
};

module.exports = {
  climbStairs
};
