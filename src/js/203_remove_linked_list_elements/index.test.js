/**
Remove all elements from a linked list of integers that have value val.

Example
Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
Return: 1 --> 2 --> 3 --> 4 --> 5
*/

const { ListNode, removeElements } = require('./index');

describe('203. Remove Linked List Elements', () => {
  it('should remove all the target elements', () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(6);
    head.next.next.next = new ListNode(3);
    head.next.next.next.next = new ListNode(4);
    head.next.next.next.next.next = new ListNode(5);
    head.next.next.next.next.next.next = new ListNode(6);

    const expected = new ListNode(1);
    expected.next = new ListNode(2);
    expected.next.next = new ListNode(3);
    expected.next.next.next = new ListNode(4);
    expected.next.next.next.next = new ListNode(5);

    const result = removeElements(head, 6);
    expect(result).toEqual(expected);
  });

  it('should not remove elements if not in list', () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);

    const expected = new ListNode(1);
    expected.next = new ListNode(2);
    expected.next.next = new ListNode(3);

    const result = removeElements(head, 6);
    expect(result).toEqual(expected);
  });

  it('should remove the only element', () => {
    const head = new ListNode(1);

    const result = removeElements(head, 1);
    expect(result).toBe(null);
  });
});
