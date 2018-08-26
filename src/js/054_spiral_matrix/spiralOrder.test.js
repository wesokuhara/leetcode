/**
Given a string s consists of upper/lower-case alphabets and empty space characters ' ',
return the length of last word in the string. If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

For example:
Given s = "Hello World",
return 5.
*/

const spiralOrder = require('./spiralOrder');

describe('58. Spiral Matrix', () => {
  it('should return the matrix in spiral order', () => {
    const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

    const expected = [1, 2, 3, 6, 9, 8, 7, 4, 5];
    const result = spiralOrder(matrix);
    expect(result).toEqual(expected);
  });

  it('should return the matrix in spiral order', () => {
    const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

    const expected = [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7];
    const result = spiralOrder(matrix);
    expect(result).toEqual(expected);
  });

  it('should return the matrix in spiral order', () => {
    const matrix = [[1, 2], [3, 4]];

    const expected = [1, 2, 4, 3];
    const result = spiralOrder(matrix);
    expect(result).toEqual(expected);
  });

  it('should return the matrix in spiral order', () => {
    const matrix = [[1]];

    const expected = [1];
    const result = spiralOrder(matrix);
    expect(result).toEqual(expected);
  });

  it('should return the matrix in spiral order', () => {
    const matrix = [];

    const expected = [];
    const result = spiralOrder(matrix);
    expect(result).toEqual(expected);
  });
});
