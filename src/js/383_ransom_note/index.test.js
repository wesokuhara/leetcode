/**
Given an arbitrary ransom note string and another string containing
all letters from all the magazines, write a function that returns
whether the ransom note can be constructed from the magazines.
Each letter in the magazine  can only be used once in the ransom note.

Note:
You may assume that both strings contain only lowercase letters.
canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
*/

const { canConstruct } = require('./index');

describe('383. Ransom Note', () => {
  it('should be able to construct the ransom note', () => {
    const ransomNote = 'aa';
    const magazine = 'aab';

    const result = canConstruct(ransomNote, magazine);
    expect(result).toBe(true);
  });

  it('should not be able to construct the ransom note', () => {
    const ransomNote = 'aa';
    const magazine = 'ab';

    const result = canConstruct(ransomNote, magazine);
    expect(result).toBe(false);
  });

  it('should not be able to construct the ransom note', () => {
    const ransomNote = 'a';
    const magazine = 'b';

    const result = canConstruct(ransomNote, magazine);
    expect(result).toBe(false);
  });
});
