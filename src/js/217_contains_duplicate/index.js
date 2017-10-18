const containsDuplicate = nums => {
  let seen = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) return true;
    seen.add(nums[i]);
  }

  return false;
};

const containsDuplicateSorting = nums => {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }

  return false;
};

module.exports = {
  containsDuplicate,
  containsDuplicateSorting
};
