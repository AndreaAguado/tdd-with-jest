const sumWithoutHighestAndLowest = require('../src/sumWithoutHighestAndLowest.js');


// test cases

test("[6, 2, 1, 8, 10] returns 16", function () {
    expect(sumWithoutHighestAndLowest([6, 2, 1, 8, 10])).toEqual(16);
});

test("[1, 1, 11, 2, 3] returns 5", function () {
    expect(sumWithoutHighestAndLowest([1, 1, 11, 2, 3])).toEqual(5);
});

test("[1, 11, 11, 2, 3] returns 5", function () {
    expect(sumWithoutHighestAndLowest([1, 11, 11, 2, 3])).toEqual(5);
});

test("[1, 11, 11, -2, 3] returns 4", function () {
    expect(sumWithoutHighestAndLowest([1, 11, 11, -2, 3])).toEqual(4);
});

test("[1] returns 0", function () {
    expect(sumWithoutHighestAndLowest([1])).toEqual(0);
});

