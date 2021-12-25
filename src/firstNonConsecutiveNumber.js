/*
Write a function firstNonConsecutiveNumber(array) to find the first element
of an array that is not consecutive.

If the whole array is consecutive then return null.

The array will always have at least 2 elements and all the elements will be numbers.
The numbers will also all be unique and in ascending order.
The numbers could be positive or negative and the first non-consecutive
could be either too!

Examples:
firstNonConsecutiveNumber([1, 3])             // return 3
firstNonConsecutiveNumber([1, 2, 4, 5, 6])    // return 4
firstNonConsecutiveNumber([-1, 0, 1, -10])    // return -10
firstNonConsecutiveNumber([1, 2, 3, 4, 5, 6]) // return null
*/
const firstNonConsecutiveNumber = (array) => {
    if (array === undefined || array.length < 2 || array.length === undefined) {
        return "The input needs to be an array";
    }
    let startValue = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] === startValue + 1) {
            startValue = array[i];
            if (i === array.length - 1) {
                return null;
            }
        }
        else if (array[i] !== startValue + 1) {
            return array[i];
        }
        else {
            startValue = array[i];
        }

    }
}

module.exports = firstNonConsecutiveNumber;


