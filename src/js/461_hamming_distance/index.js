const hammingDistance = (x, y) => {
  let binaryRep = (x ^ y).toString(2);
  let count = 0;
  for (let i = 0; i < binaryRep.length; i++) {
    if (binaryRep.charAt(i) === '1') count++;
  }
  return count;
};

module.exports = {
  hammingDistance
};
