const findComplement = num => {
  let powerOfTwo = 0;
  let i = 1;

  while (powerOfTwo <= num) {
    powerOfTwo = Math.pow(2, i);
    i++;
  }

  return powerOfTwo - 1 - num;
};

module.exports = {
  findComplement
};
