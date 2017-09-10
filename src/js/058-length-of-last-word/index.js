const lengthOfLastWord = function (s) {
  s = s.trim();

  let i = s.length - 1;
  let lastWordLength = 0;
  while (i >= 0 && s.charAt(i) !== ' ') {
    lastWordLength++;
    i--;
  }

  return lastWordLength;
};

module.exports = {
  lengthOfLastWord
};
