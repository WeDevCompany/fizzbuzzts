function fizzBuzz(number: number): string {
  if (number % 3 === 0) {
    return 'Fizz';
  }

  if (number % 5 === 0) {
    return 'Buzz';
  }
  return '';
}

module.exports = fizzBuzz;
