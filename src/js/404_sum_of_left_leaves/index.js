function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const sumOfLeftLeaves = root => {
  if (root === null) return 0;

  let sum = 0;
  let stack = [];
  stack.push(root);

  while (stack.length > 0) {
    let cur = stack.pop();

    if (cur.left) {
      if (cur.left.left === null && cur.left.right === null) {
        sum += cur.left.val;
      } else {
        stack.push(cur.left);
      }
    }

    if (cur.right) {
      stack.push(cur.right);
    }
  }

  return sum;
};

module.exports = {
  TreeNode,
  sumOfLeftLeaves
};
