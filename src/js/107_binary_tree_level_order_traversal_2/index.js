function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const levelOrderBottom = root => {
  if (root === null) return [];

  let order = [];
  let queue = [];
  queue.push(root);

  // bfs
  while (queue.length > 0) {
    // Add the values of the nodes to the level list
    // Then compose the next level to be searched (represented by the queue)
    let level = [];
    let numNodesInLevel = queue.length;
    for (let i = 0; i < numNodesInLevel; i++) {
      let node = queue.shift();
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    order.unshift(level);
  }

  return order;
};

module.exports = {
  TreeNode,
  levelOrderBottom
};
