const fizzBuzzFunction = require('../index');

describe('FizzBuzz should', () => {
  test('return empty string if is not divisible by 3 or 5', () => {
    expect(fizzBuzzFunction(1)).toBe('');
    expect(fizzBuzzFunction(2)).toBe('');
  });

  test('return Fizz divisible by 3', () => {
    expect(fizzBuzzFunction(3)).toBe('Fizz');
  });

  test('return Buzz divisible by 5', () => {
    expect(fizzBuzzFunction(5)).toBe('Buzz');
  });

  test('return Buzz divisible by 3 and 5', () => {
    expect(fizzBuzzFunction(15)).toBe('FizzBuzz');
  });
});
