/**
Write a function to delete a node (except the tail) in a singly linked list,
given only access to that node.

Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node
with value 3, the linked list should become 1 -> 2 -> 4 after calling your
function.
*/

const ListNode = require('../ListNode');
const { deleteNode } = require('./index');

describe('237. Delete Node in a Linked List', () => {
  it('should delete the node in the list', () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);

    const expected = new ListNode(1);
    expected.next = new ListNode(2);
    expected.next.next = new ListNode(4);

    deleteNode(head.next.next);

    expect(head).toEqual(expected);
  });
});
