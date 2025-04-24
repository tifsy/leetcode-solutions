/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let freq = {}

    for(let a of nums){
        freq[a] ? freq[a]++ : freq[a] = 1
    }
    return Object.keys(freq).find(key => freq[key] === 1) * 1
};