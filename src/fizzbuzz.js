/* FizzBuzz.

For a given natural number greater than zero return:
- 'fizz' if the number is dividable by 3
- 'buzz' if the number is dividable by 5
- 'fizzbuzz' if the number is dividable by 15
- the input number if no other requirement is fulfilled
*/

function fizzbuzz(number) {
    number = parseInt(number);
    if (number < 0) {
        return "The number should be natural";
    }
    if (number === 3) {
        return "fizz";
    }
    if (number === 5) {
        return "buzz";
    }
    if (number === 15) {
        return "fizzbuzz";
    }
    else {
        return number;
    }



}

module.exports = fizzbuzz
