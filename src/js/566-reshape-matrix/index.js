const matrixReshape = (nums, r, c) => {
  let n = nums.length;
  let m = nums[0].length;
  if (r*c !== n*m) return nums;

  let matrix = [];
  for (let i = 0; i < r; i++) {
    matrix[i] = [];
  }

  for (let i = 0; i < r*c; i++) {
    matrix[Math.floor(i/c)][i%c] = nums[Math.floor(i/m)][i%m];
  }

  return matrix;
};

module.exports = {
  matrixReshape
};
