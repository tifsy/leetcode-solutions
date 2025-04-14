/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    return [...s].map((char, index) => (123 - char.charCodeAt(0)) * (index + 1)).reduce((acc, cur) => acc + cur, 0)
};