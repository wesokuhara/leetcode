function ListNode(val) {
  this.val = val;
  this.next = null;
}

const deleteNode = node => {
  node.val = node.next.val;
  node.next = node.next.next;
};

module.exports = {
  ListNode,
  deleteNode
};
