const moveZeroes = nums => {
  let nonZeroIndex = 0;

  // For non-zero values, move them to the front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  // Fill the remaining spots with 0s
  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
};

module.exports = {
  moveZeroes
};
