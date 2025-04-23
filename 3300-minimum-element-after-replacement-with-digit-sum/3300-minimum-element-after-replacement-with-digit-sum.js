/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    return Math.min(...nums.map(a => String(a).split('').map(Number).reduce((acc, cur) => acc + cur, 0)))
};