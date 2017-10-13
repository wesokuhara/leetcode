const numIslands = grid => {
  let count = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === '1') {
        explore(grid, row, col);
        count++;
      }
    }
  }

  return count;
};

const explore = (grid, row, col) => {
  if (row < 0 || row >= grid.length) return;
  if (col < 0 || col >= grid[0].length) return;
  if (grid[row][col] !== '1') return;

  grid[row][col] = 'X';
  explore(grid, row + 1, col);
  explore(grid, row - 1, col);
  explore(grid, row, col + 1);
  explore(grid, row, col - 1);
};

module.exports = {
  numIslands
};
