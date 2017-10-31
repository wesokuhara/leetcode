const canConstruct = (ransomNote, magazine) => {
  let map = new Map();

  // count the number of occurances for each letter in the magazine
  for (let i = 0; i < magazine.length; i++) {
    let char = magazine.charAt(i);
    let count = map.has(char) ? map.get(char) : 0;
    map.set(char, count + 1);
  }

  // check if letters are available
  for (let i = 0; i < ransomNote.length; i++) {
    let char = ransomNote.charAt(i);
    let count = map.has(char) ? map.get(char) : 0;
    if (count > 0) {
      map.set(char, count - 1);
    } else {
      return false;
    }
  }

  return true;
};

module.exports = {
  canConstruct
};
