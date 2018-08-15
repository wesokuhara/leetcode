/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
  let n = matrix.length;

  for (let row = 0; row < n / 2; row++) {
    // always start at the top left corner of the inner square (let col = row)
    // work all the way to the top right corner of the inner square (col < n - row - 1)
    // swap values along the perimeter
    for (let col = row; col < n - row - 1; col++) {
      let temp = matrix[row][col];

      matrix[row][col] = matrix[n - col - 1][row];

      matrix[n - col - 1][row] = matrix[n - row - 1][n - col - 1];

      matrix[n - row - 1][n - col - 1] = matrix[col][n - row - 1];

      matrix[col][n - row - 1] = temp;
    }
  }
}

module.exports = {
  rotate
};
