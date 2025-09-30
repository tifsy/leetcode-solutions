/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    const len = piles.length
    return piles.sort((a, b) => a - b).slice(len / 3).filter((_, i) => i % 2 === 0).reduce((acc, cur) => acc + cur, 0)
};