const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    let count = map.has(c) ? map.get(c) : 0;
    map.set(c, count + 1);
  }

  // match all counted characters
  for (let i = 0; i < t.length; i++) {
    let c = t.charAt(i);
    let count = map.has(c) ? map.get(c) : 0;
    if (count === 0) return false;
    map.set(c, count - 1);
  }

  return true;
};

module.exports = {
  isAnagram
};
