const isValidSudoku = board => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      let n = board[row][col];
      if (n !== '.') {
        // check row
        for (let i = 0; i < 9; i++) {
          if (i !== col && board[row][i] === n) return false;
        }

        // check col
        for (let i = 0; i < 9; i++) {
          if (i !== row && board[i][col] === n) return false;
        }

        // check block
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            let blockRow = 3 * Math.floor(row / 3) + i;
            let blockCol = 3 * Math.floor(col / 3) + j;
            if (
              blockRow !== row &&
              blockCol !== col &&
              board[blockRow][blockCol] === n
            )
              return false;
          }
        }
      }
    }
  }

  return true;
};

module.exports = {
  isValidSudoku
};
