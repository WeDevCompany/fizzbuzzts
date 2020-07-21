const fizzBuzzFunction = require('../index');

describe('FizzBuzz should', () => {
  test('return the if divisible by 3', () => {
    expect(fizzBuzzFunction(3)).toBe('Fizz');
  });
});
