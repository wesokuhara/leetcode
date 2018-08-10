function isPalindrome(head) {
  if (head === null || head.next === null) return true;

  let stack = [];
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    stack.push(slow.val);
    slow = slow.next;
    fast = fast.next.next;
  }

  // for odd length lists
  if (fast) {
    slow = slow.next;
  }

  // verify the next values match the stack values
  while (stack.length > 0) {
    if (stack.pop() !== slow.val) return false;
    slow = slow.next;
  }

  return true;
}

module.exports = {
  isPalindrome
};
