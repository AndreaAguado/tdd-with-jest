/*
Write a function findMultiples(base, limit) that takes a value, integer,
and returns a list of its multiples up to another value, limit.
If limit is a multiple of integer, it should be included as well.
There will only ever be positive integers passed into the function,
not consisting of 0. The limit will always be higher than the base.

Examples:
findMultiples(2, 6) // return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
*/

function findMultiples(base, limit) {
    if (base < 1 || limit < 1) {
        return "Base and limit must be larger than 0";
    }
    if (base === undefined || limit === undefined) {
        return "Base and limit must be natural number larger than 0";
    }
    if (limit < base) {
        return "Limit cannot be larger than base";
    }
    let solutionArray = [];
    let objectToReturn = {};
    objectToReturn.solutionArray = solutionArray;
    for (let index = 1; index < limit; index++) {
        let aux = base * index;
        if (aux <= limit) {
            solutionArray.push(aux);
        }
        else if (aux > limit) {
            return objectToReturn.solutionArray;
        }
    }


}

module.exports = findMultiples;
