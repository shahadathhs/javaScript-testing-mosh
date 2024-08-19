import { describe, it, expect } from 'vitest';
import { calculateAverage } from '../src/intro';

describe('mocking', () => {
  it('should calculate the average of an array with an single element', () => {
    const array = [1];
    const result = calculateAverage(array);
    expect(result).toBe(1);
  });
});