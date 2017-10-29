/**
Initially, there is a Robot at position (0, 0). Given a sequence of its moves,
judge if this robot makes a circle, which means it moves back to the original
place.

The move sequence is represented by a string. And each move is represent by a
character. The valid robot moves are R (Right), L (Left), U (Up) and D (down).
The output should be true or false representing whether the robot makes a circle.

Example 1:
Input: "UD"
Output: true
Example 2:
Input: "LL"
Output: false
*/

const { judgeCircle } = require('./index');

describe('657. Judge Route Circle', () => {
  it('should be a circle', () => {
    const moves = 'UD';

    const result = judgeCircle(moves);
    expect(result).toBe(true);
  });

  it('should be a circle', () => {
    const moves = '';

    const result = judgeCircle(moves);
    expect(result).toBe(true);
  });

  it('should be a circle', () => {
    const moves = 'UDLR';

    const result = judgeCircle(moves);
    expect(result).toBe(true);
  });

  it('should not be a circle', () => {
    const moves = 'LL';

    const result = judgeCircle(moves);
    expect(result).toBe(false);
  });
});
