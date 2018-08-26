/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
  if (matrix.length === 0) {
    return [];
  }

  const res = [];
  let rowStart = 0;
  let rowEnd = matrix.length - 1;
  let colStart = 0;
  let colEnd = matrix[0].length - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    // traverse right
    for (let i = colStart; i <= colEnd; i++) {
      res.push(matrix[rowStart][i]);
    }
    rowStart++;

    // traverse down
    for (let i = rowStart; i <= rowEnd; i++) {
      res.push(matrix[i][colEnd]);
    }
    colEnd--;

    // traverse left
    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i--) {
        res.push(matrix[rowEnd][i]);
      }
    }
    rowEnd--;

    // traverse up
    if (colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        res.push(matrix[i][colStart]);
      }
    }
    colStart++;
  }

  return res;
}

module.exports = spiralOrder;
