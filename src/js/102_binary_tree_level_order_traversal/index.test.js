/**
Given a binary tree, return the level order traversal of its nodes' values.
(ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
*/

const TreeNode = require('../TreeNode');
const { levelOrder } = require('./index');

describe('102. Binary Tree Level Order Traversal', () => {
  it('should return the level order traversal', () => {
    const root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);

    const expected = [[3], [9, 20], [15, 7]];

    const result = levelOrder(root);
    expect(result).toEqual(expected);
  });

  it('should return the empty array', () => {
    const root = null;
    const expected = [];

    const result = levelOrder(root);
    expect(result).toEqual(expected);
  });
});
