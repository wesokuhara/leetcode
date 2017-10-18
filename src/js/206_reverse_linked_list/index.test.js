/**
Reverse a singly linked list.

A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

const { ListNode, reverseList } = require('./index');

describe('206. Reverse Linked List', () => {
  it('should reverse the linked list', () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);

    const expected = new ListNode(3);
    expected.next = new ListNode(2);
    expected.next.next = new ListNode(1);

    const result = reverseList(head);
    expect(result).toEqual(expected);
  });

  it('should reverse the linked list', () => {
    const head = new ListNode(1);

    const expected = new ListNode(1);

    const result = reverseList(head);
    expect(result).toEqual(expected);
  });
});
