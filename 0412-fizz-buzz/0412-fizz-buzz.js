/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    return Array.from({length : n}, (_, i) => 
    (i + 1) % 15 === 0 ? 'FizzBuzz' :
    (i + 1) % 3 === 0 ? 'Fizz' : 
    (i + 1) % 5 === 0 ? 'Buzz' :
    String(i + 1)
    )
};