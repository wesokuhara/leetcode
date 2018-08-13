const ListNode = require('../ListNode');

function mergeTwoLists(l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  let dummy = new ListNode(-1);
  let cur = dummy;

  while (l1 || l2) {
    if (l1 === null) {
      cur.next = l2;
      l2 = l2.next;
    } else if (l2 === null) {
      cur.next = l1;
      l1 = l1.next;
    } else if (l1.val <= l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }

    cur = cur.next;
  }

  return dummy.next;
}

function mergeTwoListsRecursive(l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  if (l1.val < l2.val) {
    l1.next = mergeTwoListsRecursive(l1.next, l2);
    return l1;
  }

  l2.next = mergeTwoListsRecursive(l1, l2.next);
  return l2;
}

module.exports = {
  mergeTwoLists,
  mergeTwoListsRecursive
};
