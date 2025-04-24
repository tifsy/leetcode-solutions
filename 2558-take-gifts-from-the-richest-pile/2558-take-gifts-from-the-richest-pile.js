/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    for(let i = 0; i < k; i++){
        let max = Math.max(...gifts)
        let maxIndex = gifts.indexOf(max)
        gifts[maxIndex] = Math.floor(Math.sqrt(max))
    }
    return gifts.reduce((acc, cur) => acc + cur, 0)
};