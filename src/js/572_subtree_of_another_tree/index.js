function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const isSubtree = (s, t) => {
  if (t === null) return true;
  if (s === null) return false;

  return isSameTree(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};

const isSameTree = (s, t) => {
  if (s === null && t === null) return true;
  if (s === null || t === null) return false;

  return (
    s.val === t.val &&
    isSameTree(s.left, t.left) &&
    isSameTree(s.right, t.right)
  );
};

module.exports = {
  TreeNode,
  isSubtree
};
