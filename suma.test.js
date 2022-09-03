import { describe, expect, it } from 'vitest';
import { suma } from './src/katas/suma';

describe('suma', () => {
	it('it should be a function', () => {
		expect(typeof suma).toBe('function');
	}),
		it('should throw an error if the first argument is not a number', () => {
			expect(() => suma('a')).toThrow('should be a number');
		}),
		it('sholud be sum 2 numbers', () => {
			expect(suma(2, 2)).toBe(4);
		}),
		it('it should be return a number', () => {
			expect(typeof suma(1)).toBe('number');
		});
});
