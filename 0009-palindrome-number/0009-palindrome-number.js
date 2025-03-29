/**
 * @param {number} x
 * @return {boolean}
 */
 //math 
 
var isPalindrome = function(x) {
    return String(x) === String(x).split('').reverse().join('')
};