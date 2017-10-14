/**
Given two binary trees and imagine that when you put one of them to cover the
other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two
nodes overlap, then sum node values up as the new value of the merged node.
Otherwise, the NOT null node will be used as the node of new tree.

Example 1:
Input:
	     Tree 1                     Tree 2
          1                         2
         / \                       / \
        3   2                     1   3
       /                           \   \
      5                             4   7
Output:
Merged tree:
	     3
	    / \
	   4   5
	  / \   \
	 5   4   7
Note: The merging process must start from the root nodes of both trees.
*/

const { TreeNode, mergeTrees } = require('./index');

describe('617. Merge Two Binary Trees', () => {
  it('should merge the trees', () => {
    const t1 = new TreeNode(1);
    t1.left = new TreeNode(3);
    t1.right = new TreeNode(2);
    t1.left.left = new TreeNode(5);

    const t2 = new TreeNode(2);
    t2.left = new TreeNode(1);
    t2.right = new TreeNode(3);
    t2.left.right = new TreeNode(4);
    t2.right.right = new TreeNode(7);

    const expected = new TreeNode(3);
    expected.left = new TreeNode(4);
    expected.right = new TreeNode(5);
    expected.left.left = new TreeNode(5);
    expected.left.right = new TreeNode(4);
    expected.right.right = new TreeNode(7);

    const result = mergeTrees(t1, t2);
    expect(result).toEqual(expected);
  });

  it('should merge the trees', () => {
    const t1 = new TreeNode(1);
    t1.left = new TreeNode(3);
    t1.right = new TreeNode(2);
    t1.left.left = new TreeNode(5);

    const t2 = null;

    const expected = new TreeNode(1);
    expected.left = new TreeNode(3);
    expected.right = new TreeNode(2);
    expected.left.left = new TreeNode(5);

    const result = mergeTrees(t1, t2);
    expect(result).toEqual(expected);
  });
});
