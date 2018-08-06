/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
  const queue = [];
  const order = [];

  if (root) queue.push(root);

  while (queue.length > 0) {
    let level = [];
    let numNodes = queue.length;

    for (let i = 0; i < numNodes; i++) {
      let node = queue.shift();
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    order.push(level);
  }

  return order;
}

module.exports = {
  levelOrder
};
