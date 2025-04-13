/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0
    const jewelsSet = new Set(jewels)

    for(let stone of stones){
        jewelsSet.has(stone) && count++
    }
    return count 
};