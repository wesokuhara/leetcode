function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const invertTree = root => {
  if (root === null) return null;

  let left = invertTree(root.left);
  let right = invertTree(root.right);

  root.left = right;
  root.right = left;
  return root;
};

module.exports = {
  TreeNode,
  invertTree
};
