const findMultiples = require("../src/findMultiples");

// write test cases to ensure findMultiples() works as expected
test("findMultiples() returns 'Base and limit must be natural number larger than 0'", () => {
    expect(findMultiples()).toEqual("Base and limit must be natural number larger than 0");
})

test("findMultiples(-2,6) returns 'Base and limit must be larger than 0'", () => {
    expect(findMultiples(-2, 6)).toEqual("Base and limit must be larger than 0");
})

test("findMultiples(2, 6) returns [2, 4, 6]", () => {
    expect(findMultiples(2, 6)).toEqual([2, 4, 6]);
})

test("findMultiples(3, 12) returns [3, 6, 9, 12]", () => {
    expect(findMultiples(3, 12)).toEqual([3, 6, 9, 12]);
})

test("findMultiples(12, 3) returns 'Limit cannot be larger than base'", () => {
    expect(findMultiples(12, 3)).toEqual("Limit cannot be larger than base");
})

test("findMultiples('2', '6') returns [2, 4, 6]", () => {
    expect(findMultiples("2", "6")).toEqual([2, 4, 6]);
})
