const isValid = s => {
  if (s.length < 2) return false;

  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c);
    } else {
      let matchingChar = stack.pop();

      if ((c === ')' && matchingChar !== '(') ||
          (c === ']' && matchingChar !== '[') ||
          (c === '}' && matchingChar !== '{')) return false;
    }
  }

  return stack.length === 0;
};

module.exports = {
  isValid
};
