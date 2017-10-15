/**
Given a singly linked list, determine if it is a palindrome.

Follow up:
Could you do it in O(n) time and O(1) space?
*/

const { ListNode, isPalindrome } = require('./index');

describe('234. Palindrom Linked List', () => {
  it('should be a palindrome', () => {
    const head = new ListNode(1);
    head.next = new ListNode(1);

    const result = isPalindrome(head);
    expect(result).toBe(true);
  });

  it('should be a palindrome', () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(1);

    const result = isPalindrome(head);
    expect(result).toBe(true);
  });

  it('should be a palindrome', () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(2);
    head.next.next.next = new ListNode(1);

    const result = isPalindrome(head);
    expect(result).toBe(true);
  });

  it('should not be a palindrome', () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);

    const result = isPalindrome(head);
    expect(result).toBe(false);
  });

  it('should not be a palindrome', () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);

    const result = isPalindrome(head);
    expect(result).toBe(false);
  });
});
