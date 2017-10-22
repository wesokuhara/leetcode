const singleNumber = nums => {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      set.delete(nums[i]);
    } else {
      set.add(nums[i]);
    }
  }

  return set.values().next().value;
};

const singleNumberXor = nums => {
  return nums.reduce((a, b) => a ^ b, 0);
};

module.exports = {
  singleNumber,
  singleNumberXor
};
