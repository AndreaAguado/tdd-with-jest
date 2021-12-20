/* FizzBuzz.

For a given natural number greater than zero return:
- 'fizz' if the number is dividable by 3
- 'buzz' if the number is dividable by 5
- 'fizzbuzz' if the number is dividable by 15
- the input number if no other requirement is fulfilled
*/

function fizzbuzz(number) {
    if (number % 15 === 0)  return 'fizzbuzz';
    if (number % 3 === 0) return 'fizz';
    if (number % 5 === 0) return 'buzz';
    return number;
}

module.exports = fizzbuzz
