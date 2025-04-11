/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    return nums.map(a => a % 2 === 0 ? 0 : 1).sort((a, b) => a - b)
};