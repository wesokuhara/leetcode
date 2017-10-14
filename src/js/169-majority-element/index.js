const majorityElement = nums => {
  let threshold = nums.length / 2;
  let counts = new Map();

  for (let i = 0; i < nums.length; i++) {
    let count = counts.get(nums[i]) || 0;
    counts.set(nums[i], count + 1);
  }

  for (let [n, count] of counts) {
    if (count > threshold) {
      return n;
    }
  }

  return -1;
};

// Moore's Voting Algorithm
const majorityElementOnePass = nums => {
  let candidate = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === candidate) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      candidate = nums[i];
      count = 1;
    }
  }

  return candidate;
};

module.exports = {
  majorityElement,
  majorityElementOnePass
};
