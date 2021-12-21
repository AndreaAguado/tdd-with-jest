// Sum all the numbers of the array except the highest and the lowest number
// If the highest and lowest numbers appear more than once, exclude ALL occurrences
//
// e.g. sumWithoutHighestAndLowest([6, 2, 1, 8, 10]) => 16
// e.g. sumWithoutHighestAndLowest([1, 1, 11, 2, 3]) => 5

const sumWithoutHighestAndLowest = array => {
	// your code here
	let min = array[0];
	let max = array[0];
	array.forEach(element => {
		if (element < min) {
			min = element;
		}
		else if (element > max) {
			max = element;
		}
	});
	let sum = 0;
	array.forEach(element => {
		if (element !== max && element !== min) {
			sum += element;
		}
	});
	return sum;
};

module.exports = sumWithoutHighestAndLowest;
