/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const arr = String(n).split('').map(Number)
    const sum = arr.reduce((acc, cur) => acc + cur, 0)
    const prod = arr.reduce((acc, cur) => acc * cur, 1)

    return prod - sum
};