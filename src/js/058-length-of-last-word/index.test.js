/**
Given a string s consists of upper/lower-case alphabets and empty space characters ' ',
return the length of last word in the string. If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

For example:
Given s = "Hello World",
return 5.
*/

const {
  lengthOfLastWord
} = require('./index');

describe('58. Length of Last Word', () => {
  it('should return the length of the last word', () => {
    const s = 'Hello World';

    const result = lengthOfLastWord(s);
    expect(result).toBe(5);
  });

  it('should return the length of the last word', () => {
    const s = 'a ';

    const result = lengthOfLastWord(s);
    expect(result).toBe(1);
  });

  it('should return the length of the last word', () => {
    const s = ' ';

    const result = lengthOfLastWord(s);
    expect(result).toBe(0);
  });
});
