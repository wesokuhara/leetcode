function invertTree(root) {
  if (root === null) return null;

  let left = invertTree(root.left);
  let right = invertTree(root.right);

  root.left = right;
  root.right = left;
  return root;
}

module.exports = {
  invertTree
};
