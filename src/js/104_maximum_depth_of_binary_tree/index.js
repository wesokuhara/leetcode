function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const maxDepth = root => {
  if (root === null) return 0;

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

module.exports = {
  TreeNode,
  maxDepth
};
