/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0

    for(let a of nums){
        String(a).length % 2 === 0 && count++
    }
    return count
};