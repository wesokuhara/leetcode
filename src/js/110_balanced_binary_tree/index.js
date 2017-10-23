function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const isBalanced = root => {
  return getDepth(root) !== -1;
};

const getDepth = root => {
  if (root === null) return 0;

  let leftDepth = getDepth(root.left);
  let rightDepth = getDepth(root.right);

  // check if subtrees are balanced
  if (leftDepth === -1 || rightDepth === -1) return -1;
  if (Math.abs(leftDepth - rightDepth) > 1) return -1;

  return 1 + Math.max(leftDepth, rightDepth);
};

module.exports = {
  TreeNode,
  isBalanced
};
