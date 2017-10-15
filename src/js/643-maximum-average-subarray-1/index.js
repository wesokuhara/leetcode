const findMaxAverage = (nums, k) => {
  let runningSum = 0;
  for (let i = 0; i < k; i++) {
    runningSum += nums[i];
  }

  let max = runningSum;
  for (let i = 1; i + k - 1 < nums.length; i++) {
    runningSum += nums[i + k - 1] - nums[i - 1];
    max = Math.max(max, runningSum);
  }

  return max / k;
};

module.exports = {
  findMaxAverage
};
