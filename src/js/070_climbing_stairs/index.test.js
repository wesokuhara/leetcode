/**
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

const { climbStairs } = require('./index');

describe('70. Climbing Stairs', () => {
  it('should return the number of ways to climb the stairs', () => {
    const n = 1;

    const result = climbStairs(n);
    expect(result).toBe(1);
  });

  it('should return the number of ways to climb the stairs', () => {
    const n = 2;

    const result = climbStairs(n);
    expect(result).toBe(2);
  });

  it('should return the number of ways to climb the stairs', () => {
    const n = 5;

    const result = climbStairs(n);
    expect(result).toBe(8);
  });
});
