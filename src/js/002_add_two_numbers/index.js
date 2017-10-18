function ListNode(val) {
  this.val = val;
  this.next = null;
}

const addTwoNumbers = (l1, l2) => {
  let dummy = new ListNode(-1);
  let cur = dummy;
  let carry = 0;
  let p1 = l1;
  let p2 = l2;

  while (p1 !== null || p2 !== null) {
    let v1 = 0;
    let v2 = 0;
    if (p1) {
      v1 = p1.val;
      p1 = p1.next;
    }
    if (p2) {
      v2 = p2.val;
      p2 = p2.next;
    }
    let sum = v1 + v2 + carry;
    let digit = sum % 10;
    carry = Math.floor(sum / 10);

    cur.next = new ListNode(digit);
    cur = cur.next;
  }

  if (carry > 0) {
    cur.next = new ListNode(carry);
  }

  return dummy.next;
};

module.exports = {
  ListNode,
  addTwoNumbers
};
