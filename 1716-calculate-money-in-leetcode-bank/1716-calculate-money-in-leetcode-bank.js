/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    const quot = Math.floor(n / 7)
    const rem = n % 7

    return 7 * quot * (quot + 7) / 2 + rem * quot + (rem * (rem + 1)) / 2
};