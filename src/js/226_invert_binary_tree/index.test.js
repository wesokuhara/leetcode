/**
Invert a binary tree.
     4
   /   \
  2     7
 / \   / \
1   3 6   9
to
     4
   /   \
  7     2
 / \   / \
9   6 3   1
*/

const { TreeNode, invertTree } = require('./index');

describe('226. Invert Binary Tree', () => {
  it('should invert the binary tree', () => {
    const root = new TreeNode(4);
    root.left = new TreeNode(2);
    root.right = new TreeNode(7);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(3);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(9);

    const expected = new TreeNode(4);
    expected.left = new TreeNode(7);
    expected.right = new TreeNode(2);
    expected.left.left = new TreeNode(9);
    expected.left.right = new TreeNode(6);
    expected.right.left = new TreeNode(3);
    expected.right.right = new TreeNode(1);

    const result = invertTree(root);
    expect(result).toEqual(expected);
  });

  it('should invert the binary tree', () => {
    const root = null;

    const expected = null;

    const result = invertTree(root);
    expect(result).toEqual(expected);
  });

  it('should invert the binary tree', () => {
    const root = new TreeNode(4);

    const expected = new TreeNode(4);

    const result = invertTree(root);
    expect(result).toEqual(expected);
  });
});
