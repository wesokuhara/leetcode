const findDisappearedNumbers = nums => {
  // mark any number seen as negative at that index
  for (let i = 0; i < nums.length; i++) {
    let n = Math.abs(nums[i]);
    if (nums[n - 1] > 0) nums[n - 1] *= -1;
  }

  let missing = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) missing.push(i + 1);
  }

  return missing;
};

module.exports = {
  findDisappearedNumbers
};
