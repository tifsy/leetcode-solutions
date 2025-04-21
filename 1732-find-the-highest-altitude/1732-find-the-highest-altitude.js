/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let alt = 0
    let ans = [0]

    for(let a of gain){
        alt += a
        ans.push(alt)
    }
    return Math.max(...ans)
};