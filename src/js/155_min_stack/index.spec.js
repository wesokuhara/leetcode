/**
Design a stack that supports push, pop, top, and retrieving the minimum element
in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
Example:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
*/

const { MinStack } = require('./index');

describe('155. Min Stack', () => {
  it('should retrieve the minimum element in the stack', () => {
    const stack = new MinStack();
    stack.push(-2);
    stack.push(0);
    stack.push(-3);

    const result1 = stack.getMin();
    const expected1 = -3;
    expect(result1).toBe(expected1);

    stack.pop();

    const result2 = stack.top();
    const expected2 = 0;
    expect(result2).toBe(expected2);

    const result3 = stack.getMin();
    const expected3 = -2;
    expect(result3).toBe(expected3);
  });

  it('should retrieve the minimum element in the stack', () => {
    const stack = new MinStack();
    stack.push(0);
    stack.push(1);
    stack.push(0);

    const result1 = stack.getMin();
    const expected1 = 0;
    expect(result1).toBe(expected1);

    stack.pop();

    const result2 = stack.getMin();
    const expected2 = 0;
    expect(result2).toBe(expected2);
  });
});
