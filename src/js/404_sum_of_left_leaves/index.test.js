/**
Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively.
Return 24.
*/

const { TreeNode, sumOfLeftLeaves } = require('./index');

describe('404. Sum of Left Leaves', () => {
  it('should get the sum of left leaves', () => {
    const root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);

    const result = sumOfLeftLeaves(root);
    expect(result).toBe(24);
  });

  it('should get the sum of left leaves', () => {
    const root = new TreeNode(3);

    const result = sumOfLeftLeaves(root);
    expect(result).toBe(0);
  });

  it('should get the sum of left leaves', () => {
    const root = null;

    const result = sumOfLeftLeaves(root);
    expect(result).toBe(0);
  });
});
