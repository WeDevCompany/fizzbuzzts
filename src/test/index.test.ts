const fizzBuzzFunction = require('../index');

describe('FizzBuzz should', () => {
  test('return Fizz divisible by 3', () => {
    expect(fizzBuzzFunction(3)).toBe('Fizz');
  });

  test('return Buzz divisible by 5', () => {
    expect(fizzBuzzFunction(5)).toBe('Buzz');
  });
});
