function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const mergeTrees = (t1, t2) => {
  if (t1 === null && t2 === null) return null;
  if (t1 === null) return t2;
  if (t2 === null) return t1;

  let root = new TreeNode(t1.val + t2.val);
  root.left = mergeTrees(t1.left, t2.left);
  root.right = mergeTrees(t1.right, t2.right);
  return root;
};

module.exports = {
  TreeNode,
  mergeTrees
};
