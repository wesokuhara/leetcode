const maxAreaOfIsland = grid => {
  let max = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        let area = explore(grid, row, col);
        max = Math.max(max, area);
      }
    }
  }

  return max;
};

const explore = (grid, row, col) => {
  if (row < 0 || row >= grid.length) return 0;
  if (col < 0 || col >= grid[0].length) return 0;
  if (grid[row][col] !== 1) return 0;
  grid[row][col] = -1;

  return (
    1 +
    explore(grid, row + 1, col) +
    explore(grid, row - 1, col) +
    explore(grid, row, col + 1) +
    explore(grid, row, col - 1)
  );
};

module.exports = {
  maxAreaOfIsland
};
