/**
Given two strings s and t, write a function to determine if t is an anagram of s.
For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.
Note:
You may assume the string contains only lowercase alphabets.
*/

const { isAnagram } = require('./index');

describe('242. Valid Anagram', () => {
  it('should be a valid anagram', () => {
    const s = 'anagram';
    const t = 'nagaram';

    const result = isAnagram(s, t);
    expect(result).toBe(true);
  });

  it('should be a valid anagram', () => {
    const s = '';
    const t = '';

    const result = isAnagram(s, t);
    expect(result).toBe(true);
  });

  it('should not be a valid anagram', () => {
    const s = 'rat';
    const t = 'car';

    const result = isAnagram(s, t);
    expect(result).toBe(false);
  });
});
