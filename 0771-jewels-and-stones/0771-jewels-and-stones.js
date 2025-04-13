/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0
    const jewelsArr = [...jewels]

    for(let stone of stones){
        jewelsArr.includes(stone) && count++
    }
    return count 
};