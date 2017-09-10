/**
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for
the multiples of five output “Buzz”. For numbers which are multiples of both
three and five output “FizzBuzz”.

Example:
n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
*/

const {
  fizzBuzz
} = require('./index');

describe('412. Fizz Buzz', () => {
  it('should return the number of ways to climb the stairs', () => {
    const n = 15;
    const expected = [
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz'
    ];

    const result = fizzBuzz(n);
    expect(result).toEqual(expected);
  });

  it('should return the number of ways to climb the stairs', () => {
    const n = 1;
    const expected = [
      '1'
    ];

    const result = fizzBuzz(n);
    expect(result).toEqual(expected);
  });
});
