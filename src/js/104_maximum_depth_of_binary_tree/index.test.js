/**
Given a binary tree, find its maximum depth.
The maximum depth is the number of nodes along the longest path
from the root node down to the farthest leaf node.
*/

const { TreeNode, maxDepth } = require('./index');

describe('104. Maximum Depth of Binary Tree', () => {
  it('should return the maximum depth', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);

    const result = maxDepth(root);
    expect(result).toBe(3);
  });

  it('should return the maximum depth', () => {
    const root = new TreeNode(1);

    const result = maxDepth(root);
    expect(result).toBe(1);
  });

  it('should return the maximum depth', () => {
    const root = null;

    const result = maxDepth(root);
    expect(result).toBe(0);
  });
});
