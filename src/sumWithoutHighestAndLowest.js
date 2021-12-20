// Sum all the numbers of the array except the highest and the lowest number
// If the highest and lowest numbers appear more than once, exclude ALL occurrences
//
// e.g. sumWithoutHighestAndLowest([6, 2, 1, 8, 10]) => 16
// e.g. sumWithoutHighestAndLowest([1, 1, 11, 2, 3]) => 5

const sumWithoutHighestAndLowest = array => {
	// your code here
    let min = Infinity;
    let max = -Infinity;
    array.forEach((n) => {
        if (n<min) min = n;
        if (n>max) max = n;
    })


    let sum = 0;
    array.forEach((n) => {
        if (n!==min && n!==max) sum+=n;
    })
    return sum;
};

module.exports = sumWithoutHighestAndLowest;
