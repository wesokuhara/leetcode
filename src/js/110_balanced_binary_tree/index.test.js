/**
Given a binary tree, determine if it is height-balanced.
For this problem, a height-balanced binary tree is defined as a binary tree
in which the depth of the two subtrees of every node never differ by more than 1.
*/

const { TreeNode, isBalanced } = require('./index');

describe('110. Balanced Binary Tree', () => {
  it('should be a balanced binary tree', () => {
    const root = new TreeNode(1);

    const result = isBalanced(root);
    expect(result).toBe(true);
  });

  it('should not be a balanced binary tree', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);

    const result = isBalanced(root);
    expect(result).toBe(false);
  });

  it('should be a balanced binary tree', () => {
    const root = null;

    const result = isBalanced(root);
    expect(result).toBe(true);
  });
});
