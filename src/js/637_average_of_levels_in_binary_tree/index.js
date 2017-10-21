function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const averageOfLevels = root => {
  if (root === null) return [];
  let res = [];
  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let numNodes = queue.length;
    let sum = 0;
    for (let i = 0; i < numNodes; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      sum += node.val;
    }
    res.push(sum / numNodes);
  }

  return res;
};

module.exports = {
  TreeNode,
  averageOfLevels
};
