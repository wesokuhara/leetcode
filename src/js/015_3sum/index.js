const threeSum = nums => {
  nums.sort((a, b) => a - b);

  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    // skip duplicate number combinations
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let lo = i + 1;
    let hi = nums.length - 1;

    while (lo < hi) {
      let sum = nums[i] + nums[lo] + nums[hi];

      if (sum === 0) {
        res.push([nums[i], nums[lo], nums[hi]]);

        // skip duplicate number combinations
        while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
        while (lo < hi && nums[hi] === nums[hi - 1]) hi--;
        lo++;
        hi--;
      } else if (sum < 0) {
        lo++;
      } else if (sum > 0) {
        hi--;
      }
    }
  }

  return res;
};

module.exports = {
  threeSum
};
