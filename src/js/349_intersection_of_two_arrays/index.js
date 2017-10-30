const intersection = (nums1, nums2) => {
  let num1Set = new Set(nums1);
  let intersectSet = new Set();

  for (let i = 0; i < nums2.length; i++) {
    if (num1Set.has(nums2[i])) {
      intersectSet.add(nums2[i]);
    }
  }

  return Array.from(intersectSet);
};

module.exports = {
  intersection
};
