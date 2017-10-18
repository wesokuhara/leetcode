/**
Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}"
are all valid but "(]" and "([)]" are not.
*/

const { isValid } = require('./index');

describe('20. Valid Parentheses', () => {
  it('should be valid', () => {
    const s = '()';

    const result = isValid(s);
    expect(result).toBe(true);
  });

  it('should be valid', () => {
    const s = '(){}[]';

    const result = isValid(s);
    expect(result).toBe(true);
  });

  it('should not be valid', () => {
    const s = '([)]';

    const result = isValid(s);
    expect(result).toBe(false);
  });
});
