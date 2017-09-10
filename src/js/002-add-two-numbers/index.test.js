/**
You are given two linked lists representing two non-negative numbers.
The digits are stored in reverse order and each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
*/

const {
  ListNode,
  addTwoNumbers
} = require('./index');

describe('2. Add Two Numbers', () => {
  it('should add the two numbers are return it as a linked list', () => {
    const l1 = new ListNode(2);
    l1.next = new ListNode(4);
    l1.next.next = new ListNode(3);

    const l2 = new ListNode(5);
    l2.next = new ListNode(6);
    l2.next.next = new ListNode(4);

    const expected = new ListNode(7);
    expected.next = new ListNode(0);
    expected.next.next = new ListNode(8);

    const result = addTwoNumbers(l1, l2);
    expect(result).toEqual(expected);
  });

  it('should add the two numbers are return it as a linked list', () => {
    const l1 = new ListNode(9);
    l1.next = new ListNode(9);
    l1.next.next = new ListNode(9);

    const l2 = new ListNode(1);

    const expected = new ListNode(0);
    expected.next = new ListNode(0);
    expected.next.next = new ListNode(0);
    expected.next.next.next = new ListNode(1);

    const result = addTwoNumbers(l1, l2);
    expect(result).toEqual(expected); 
  });
});
