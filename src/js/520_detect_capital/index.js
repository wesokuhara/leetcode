const detectCapitalUse = word => {
  if (word === word.toUpperCase()) return true;

  for (let i = 0; i < word.length; i++) {
    let c = word.charAt(i);
    if (c === c.toUpperCase() && i !== 0) return false;
  }

  return true;
};

module.exports = {
  detectCapitalUse
};
