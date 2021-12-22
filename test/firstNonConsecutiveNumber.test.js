const firstNonConsecutiveNumber = require("../src/firstNonConsecutiveNumber");

// write test cases to ensure firstNonConsecutiveNumber() works as expected
test("firstNonConsecutiveNumber([1, 3]) returns 3", function () {
    expect(firstNonConsecutiveNumber([1, 3])).toEqual(3);
});

test("firstNonConsecutiveNumber([1, 2, 4, 5, 6]) returns 4", function () {
    expect(firstNonConsecutiveNumber([1, 2, 4, 5, 6])).toEqual(4);
});

test("firstNonConsecutiveNumber([-1, 0, 1, -10]) returns -10", function () {
    expect(firstNonConsecutiveNumber([-1, 0, 1, -10])).toEqual(-10);
});

test("firstNonConsecutiveNumber([1, 2, 3, 4, 5, 6]) returns null", function () {
    expect(firstNonConsecutiveNumber([1, 2, 3, 4, 5, 6])).toEqual(null);
});

test("firstNonConsecutiveNumber() returns 'The input needs to be an array' ", function () {
    expect(firstNonConsecutiveNumber()).toEqual("The input needs to be an array");
});
