const findTheDifference = (s, t) => {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    let n = map.has(c) ? map.get(c) : 0;
    map.set(c, n + 1);
  }

  for (let i = 0; i < t.length; i++) {
    let c = t.charAt(i);
    if (!map.has(c)) return c;

    let n = map.get(c);
    if (n === 1) map.delete(c);
    else map.set(c, n - 1);
  }
};

module.exports = {
  findTheDifference
};
