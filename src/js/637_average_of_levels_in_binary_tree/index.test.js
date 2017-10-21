/**
Given a non-empty binary tree, return the average value of the nodes on each
level in the form of an array.

Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level
2 is 11. Hence return [3, 14.5, 11].
Note:
The range of node's value is in the range of 32-bit signed integer.
*/

const { TreeNode, averageOfLevels } = require('./index');

describe('637. Average of Levels in Binary Tree', () => {
  it('should return the average of levels', () => {
    const root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);

    const expected = [3, 14.5, 11];
    const result = averageOfLevels(root);
    expect(result).toEqual(expected);
  });

  it('should return the average of levels', () => {
    const root = new TreeNode(3);
    root.left = new TreeNode(-1);
    root.right = new TreeNode(1);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);

    const expected = [3, 0, 11];
    const result = averageOfLevels(root);
    expect(result).toEqual(expected);
  });

  it('should return the average of levels', () => {
    const root = new TreeNode(3);

    const expected = [3];
    const result = averageOfLevels(root);
    expect(result).toEqual(expected);
  });

  it('should return the average of levels', () => {
    const root = null;

    const expected = [];
    const result = averageOfLevels(root);
    expect(result).toEqual(expected);
  });
});
