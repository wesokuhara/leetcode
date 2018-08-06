/**
Given two non-empty binary trees s and t, check whether tree t has exactly the
same structure and node values with a subtree of s. A subtree of s is a tree
consists of a node in s and all of this node's descendants. The tree s could
also be considered as a subtree of itself.

Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.
Example 2:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
    /
   0
Given tree t:
   4
  / \
 1   2
Return false.
*/

const TreeNode = require('../TreeNode');
const { isSubtree } = require('./index');

describe('572. Subtree of Another Tree', () => {
  it('should have the subtree', () => {
    const t1 = new TreeNode(5);
    t1.left = new TreeNode(10);
    t1.right = new TreeNode(7);
    t1.left.left = new TreeNode(4);
    t1.left.right = new TreeNode(6);
    t1.left.left.left = new TreeNode(1);
    t1.left.left.right = new TreeNode(2);
    t1.left.right.right = new TreeNode(-1);

    const t2 = new TreeNode(10);
    t2.left = new TreeNode(4);
    t2.right = new TreeNode(6);
    t2.left.left = new TreeNode(1);
    t2.left.right = new TreeNode(2);
    t2.right.right = new TreeNode(-1);

    const result = isSubtree(t1, t2);
    expect(result).toBe(true);
  });

  it('should have the subtree', () => {
    const t1 = new TreeNode(10);
    t1.left = new TreeNode(10);
    t1.right = new TreeNode(7);
    t1.left.left = new TreeNode(4);
    t1.left.right = new TreeNode(6);
    t1.left.left.left = new TreeNode(1);
    t1.left.left.right = new TreeNode(2);
    t1.left.right.right = new TreeNode(-1);

    const t2 = new TreeNode(10);
    t2.left = new TreeNode(4);
    t2.right = new TreeNode(6);
    t2.left.left = new TreeNode(1);
    t2.left.right = new TreeNode(2);
    t2.right.right = new TreeNode(-1);

    const result = isSubtree(t1, t2);
    expect(result).toBe(true);
  });

  it('should not have the subtree', () => {
    const t1 = new TreeNode(5);
    t1.left = new TreeNode(10);
    t1.right = new TreeNode(7);
    t1.left.left = new TreeNode(4);
    t1.left.right = new TreeNode(6);
    t1.left.left.left = new TreeNode(1);
    t1.left.left.right = new TreeNode(2);
    t1.left.right.left = new TreeNode(-1);

    const t2 = new TreeNode(10);
    t2.left = new TreeNode(4);
    t2.right = new TreeNode(6);
    t2.left.left = new TreeNode(1);
    t2.left.right = new TreeNode(2);
    t2.right.right = new TreeNode(-1);

    const result = isSubtree(t1, t2);
    expect(result).toBe(false);
  });
});
