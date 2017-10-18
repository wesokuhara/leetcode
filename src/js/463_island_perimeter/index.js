const islandPerimeter = grid => {
  let perimeter = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        perimeter += 4;

        // check above and left of this cell
        if (row > 0 && grid[row - 1][col] === 1) perimeter -= 2;
        if (col > 0 && grid[row][col - 1] === 1) perimeter -= 2;
      }
    }
  }
  return perimeter;
};

module.exports = {
  islandPerimeter
};
