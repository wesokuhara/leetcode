/**
Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".
*/

const { reverseString } = require('./index');

describe('344. Reverse String', () => {
  it('should reverse the string', () => {
    const str = 'hello';
    const expected = 'olleh';

    const result = reverseString(str);
    expect(result).toBe(expected);
  });

  it('should reverse the string', () => {
    const str = '';
    const expected = '';

    const result = reverseString(str);
    expect(result).toBe(expected);
  });

  it('should reverse the string', () => {
    const str = 'hi';
    const expected = 'ih';

    const result = reverseString(str);
    expect(result).toBe(expected);
  });
});
