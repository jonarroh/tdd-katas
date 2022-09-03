export const suma = (a, b) => {
	if (typeof a !== 'number') throw new Error('should be a number');
	return a + b;
};
