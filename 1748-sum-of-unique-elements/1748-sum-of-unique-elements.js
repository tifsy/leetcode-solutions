/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let freq = {}
    
    for(let num of nums){
        freq[num] ? freq[num] += 1: freq[num] = 1
    }
    return Object.entries(freq)
    .filter(([_, value]) => value === 1)
    .reduce((acc, [key, _]) => acc + Number(key) , 0)
};