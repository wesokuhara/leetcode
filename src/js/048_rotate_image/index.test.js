/**
You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:

You have to rotate the image in-place, which means you have to modify the
input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
*/

const { rotate } = require('./index');

describe('48. Rotate Image', () => {
  it('should rotate the matrix', () => {
    const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const expected = [[7, 4, 1], [8, 5, 2], [9, 6, 3]];
    rotate(matrix);
    expect(matrix).toEqual(expected);
  });

  it('should rotate the matrix', () => {
    const matrix = [[1, 2], [3, 4]];
    const expected = [[3, 1], [4, 2]];
    rotate(matrix);
    expect(matrix).toEqual(expected);
  });

  it('should rotate the matrix', () => {
    const matrix = [[1]];
    const expected = [[1]];
    rotate(matrix);
    expect(matrix).toEqual(expected);
  });
});
