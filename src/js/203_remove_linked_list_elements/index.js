const ListNode = require('../ListNode');

function removeElements(head, val) {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let cur = dummy;

  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return dummy.next;
}

module.exports = {
  removeElements
};
