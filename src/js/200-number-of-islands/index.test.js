/**
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands
horizontally or vertically. You may assume all four edges of the grid are all
surrounded by water.
*/

const { numIslands } = require('./index');

describe('200. Number of Islands', () => {
  it('should return the number of islands on the map', () => {
    const grid = [
      ['1', '1', '1', '0'],
      ['1', '1', '1', '0'],
      ['1', '1', '1', '0'],
      ['1', '1', '1', '0']
    ];

    const result = numIslands(grid);
    expect(result).toBe(1);
  });

  it('should return the number of islands on the map', () => {
    const grid = [
      ['1', '0', '0', '0'],
      ['0', '0', '0', '0'],
      ['0', '0', '0', '0'],
      ['0', '0', '0', '1']
    ];

    const result = numIslands(grid);
    expect(result).toBe(2);
  });

  it('should return the number of islands on the map', () => {
    const grid = [
      ['0', '0', '0', '0'],
      ['0', '0', '0', '0'],
      ['0', '0', '0', '0'],
      ['0', '0', '0', '0']
    ];

    const result = numIslands(grid);
    expect(result).toBe(0);
  });
});
