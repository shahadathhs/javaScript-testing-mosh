export function max(a, b) {
  return (a > b) ? a : b;
}

export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
}

export function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

// -1! = undefined
// 0! = 1
// 1! = 1
// 2! = 2 * 1
// 3! = 3 * 2 * 1

export function factorial(n) {
  if (typeof n !== 'number') return NaN;
  if (n < 0) return undefined;
  if (n === 0) return 1;
  if (n === 1) return 1;
  return n * factorial(n - 1);
}