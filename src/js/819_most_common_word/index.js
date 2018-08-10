/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
function mostCommonWord(paragraph, banned) {
  const bannedSet = new Set(banned);

  const strippedParagraph = paragraph
    .trim()
    .toLowerCase()
    .replace(/[!?',;.]/g, '');

  let bestWord;
  let max = 0;
  let count = {};

  const words = strippedParagraph.split(' ');
  words.forEach(word => {
    if (!bannedSet.has(word)) {
      const nextCount = (count[word] || 0) + 1;
      count[word] = nextCount;

      if (nextCount > max) {
        max = nextCount;
        bestWord = word;
      }
    }
  });

  return bestWord;
}

module.exports = {
  mostCommonWord
};
