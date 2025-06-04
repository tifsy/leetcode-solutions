/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    const sorted = nums.sort((a, b) => a - b)
    
    return sorted.filter((_, i) => i % 2 === 0).reduce((acc, cur) => acc + cur, 0)
};