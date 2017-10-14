const reverseString = s => {
  let chars = s.split('');
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    let temp = chars[start];
    chars[start] = chars[end];
    chars[end] = temp;

    start++;
    end--;
  }

  return chars.join('');
};

module.exports = {
  reverseString
};
