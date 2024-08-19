import { describe, it, expect } from 'vitest';
import { calculateAverage, factorial, fizzBuzz, max } from '../src/intro';

describe('intro', () => {
  describe('max', () => {
    it('should return the first argument if it is greater than the second', () => {
      // // Arrange
      // const a = 5;
      // const b = 3;
  
      // // Act
      // const result = max(a, b);
      
      // // Assert
      // expect(result).toBe(a);
      expect(max(5, 3)).toBe(5);
    });
  
    it('should return the second argument if it is greater than the first', () => {
      expect(max(1, 3)).toBe(3);
    });
  
    it('should return the first argument if both are equal', () => {
      expect(max(1, 1)).toBe(1);
    });
  });

  describe('fizzBuzz', () => {
    it('should return "FizzBuzz" when n is divisible by 3 and 5', () => {
      expect(fizzBuzz(15)).toBe('FizzBuzz');
    });

    it('should return "Fizz" when n is divisible by 3', () => {
      expect(fizzBuzz(3)).toBe('Fizz');
    });

    it('should return "Buzz" when n is divisible by 5', () => {
      expect(fizzBuzz(5)).toBe('Buzz');
    });

    it('should return n.toString() when n is not divisible by 3 or 5', () => {
      expect(fizzBuzz(7)).toBe('7');
    });
  });

  describe('calculateAverage', () => {
    it('should return NaN when the array is empty', () => {
      expect(calculateAverage([])).toBeNaN();
    });

    it('should calculate the average of an array with an single element', () => {
      expect(calculateAverage([1])).toBe(1);
    });

    it('should calculate the average of an array with multiple elements', () => {
      expect(calculateAverage([1, 2, 3, 4, 5])).toBe(3);
    });
  });

  describe('factorial', () => {
    it('should return NaN when n is not a number', () => {
      expect(factorial('a')).toBeNaN();
    });

    it('should return undefined when n is less than 0', () => {
      expect(factorial(-1)).toBeUndefined();
    })

    it('should return 1 when n is 0', () => {
      expect(factorial(0)).toBe(1);
    });

    it('should return 1 when n is 1', () => {
      expect(factorial(1)).toBe(1);
    });

    it('should calculate the factorial of n when n is greater than 0', () => {
      expect(factorial(5)).toBe(120);
    });
  });
})