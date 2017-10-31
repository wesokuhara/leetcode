const maxSubArray = nums => {
  let max = nums[0];
  let rollingSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let potentialSum = rollingSum + nums[i];
    rollingSum = Math.max(potentialSum, nums[i]);
    max = Math.max(max, rollingSum);
  }

  return max;
};

module.exports = {
  maxSubArray
};
