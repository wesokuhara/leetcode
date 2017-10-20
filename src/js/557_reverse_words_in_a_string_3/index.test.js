/**
Given a string, you need to reverse the order of characters in each word within
a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Note: In the string, each word is separated by single space and there will not
be any extra space in the string.
*/

const { reverseWords } = require('./index');

describe('557. Reverse Words in a String III', () => {
  it('should reverse the words', () => {
    const s = "Let's take LeetCode contest";
    const expected = "s'teL ekat edoCteeL tsetnoc";

    const result = reverseWords(s);
    expect(result).toBe(expected);
  });

  it('should reverse the words', () => {
    const s = '';
    const expected = '';

    const result = reverseWords(s);
    expect(result).toBe(expected);
  });

  it('should reverse the words', () => {
    const s = 'a b';
    const expected = 'a b';

    const result = reverseWords(s);
    expect(result).toBe(expected);
  });
});
