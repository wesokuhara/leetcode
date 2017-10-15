const findLengthOfLCIS = nums => {
  if (nums.length === 0) return 0;
  let max = 0;
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      count++;
    } else {
      max = Math.max(max, count);
      count = 1;
    }
  }

  return Math.max(max, count);
};

module.exports = {
  findLengthOfLCIS
};
