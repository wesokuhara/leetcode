const judgeCircle = moves => {
  let upDown = 0;
  let leftRight = 0;

  for (let i = 0; i < moves.length; i++) {
    let c = moves.charAt(i);
    if (c === 'U') upDown++;
    else if (c === 'D') upDown--;
    else if (c === 'L') leftRight--;
    else if (c === 'R') leftRight++;
  }

  return upDown === 0 && leftRight === 0;
};

module.exports = {
  judgeCircle
};
