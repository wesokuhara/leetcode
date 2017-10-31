/**
Implement the following operations of a queue using stacks.
push(x) -- Push element x to the back of queue.
pop() -- Removes the element from in front of queue.
peek() -- Get the front element.
empty() -- Return whether the queue is empty.

Notes:
You must use only standard operations of a stack -- which means only
push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, stack may not be supported natively.
You may simulate a stack by using a list or deque (double-ended queue),
as long as you use only standard operations of a stack.
You may assume that all operations are valid
(for example, no pop or peek operations will be called on an empty queue).
*/

const { MyQueue } = require('./index');

describe('232. Implement Queue using Stacks', () => {
  let queue;

  beforeEach(() => {
    queue = new MyQueue();
  });

  it('should perform push', () => {
    queue.push(1);
    queue.push(2);
    queue.push(3);

    const isEmpty = queue.empty();
    expect(isEmpty).toBe(false);
  });

  it('should perform pop', () => {
    queue.push(1);
    queue.push(2);
    queue.push(3);

    const result = queue.pop();
    expect(result).toBe(1);

    const result2 = queue.pop();
    expect(result2).toBe(2);
  });

  it('should perform peek', () => {
    queue.push(1);
    queue.push(2);
    queue.push(3);

    const expected = 1;
    const result = queue.peek();
    expect(result).toEqual(expected);
  });

  it('should perform empty', () => {
    const isEmpty1 = queue.empty();
    expect(isEmpty1).toBe(true);

    queue.push(1);

    const isEmpty2 = queue.empty();
    expect(isEmpty2).toBe(false);
  });
});
