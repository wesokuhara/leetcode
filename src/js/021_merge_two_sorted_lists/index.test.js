/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

const ListNode = require('../ListNode');
const { mergeTwoLists, mergeTwoListsRecursive } = require('./index');

describe('21. Merge Two Sorted Lists', () => {
  describe('Iterative', () => {
    it('should merge the two lists', () => {
      const head1 = new ListNode(1);
      head1.next = new ListNode(2);
      head1.next.next = new ListNode(5);

      const head2 = new ListNode(3);
      head2.next = new ListNode(4);

      const expected = new ListNode(1);
      expected.next = new ListNode(2);
      expected.next.next = new ListNode(3);
      expected.next.next.next = new ListNode(4);
      expected.next.next.next.next = new ListNode(5);

      const result = mergeTwoLists(head1, head2);
      expect(result).toEqual(expected);
    });

    it('should merge the two lists', () => {
      const head1 = new ListNode(1);
      head1.next = new ListNode(2);
      head1.next.next = new ListNode(3);

      const head2 = new ListNode(1);
      head2.next = new ListNode(2);
      head2.next.next = new ListNode(3);

      const expected = new ListNode(1);
      expected.next = new ListNode(1);
      expected.next.next = new ListNode(2);
      expected.next.next.next = new ListNode(2);
      expected.next.next.next.next = new ListNode(3);
      expected.next.next.next.next.next = new ListNode(3);

      const result = mergeTwoLists(head1, head2);
      expect(result).toEqual(expected);
    });
  });

  describe('Recursive', () => {
    it('should merge the two lists', () => {
      const head1 = new ListNode(1);
      head1.next = new ListNode(2);
      head1.next.next = new ListNode(5);

      const head2 = new ListNode(3);
      head2.next = new ListNode(4);

      const expected = new ListNode(1);
      expected.next = new ListNode(2);
      expected.next.next = new ListNode(3);
      expected.next.next.next = new ListNode(4);
      expected.next.next.next.next = new ListNode(5);

      const result = mergeTwoListsRecursive(head1, head2);
      expect(result).toEqual(expected);
    });

    it('should merge the two lists', () => {
      const head1 = new ListNode(1);
      head1.next = new ListNode(2);
      head1.next.next = new ListNode(3);

      const head2 = new ListNode(1);
      head2.next = new ListNode(2);
      head2.next.next = new ListNode(3);

      const expected = new ListNode(1);
      expected.next = new ListNode(1);
      expected.next.next = new ListNode(2);
      expected.next.next.next = new ListNode(2);
      expected.next.next.next.next = new ListNode(3);
      expected.next.next.next.next.next = new ListNode(3);

      const result = mergeTwoListsRecursive(head1, head2);
      expect(result).toEqual(expected);
    });
  });
});
