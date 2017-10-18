/**
 * initialize your data structure here.
 */
function MinStack() {
  this.stack = [];
  this.mins = [];
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (this.stack.length === 0) {
    this.mins.push(x);
  } else {
    let min = this.mins[this.mins.length - 1];
    this.mins.push(Math.min(min, x));
  }
  this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop();
  this.mins.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.mins[this.mins.length - 1];
};

module.exports = {
  MinStack
};
