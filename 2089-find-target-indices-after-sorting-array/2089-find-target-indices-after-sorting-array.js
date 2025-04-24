/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let ans = []
    
    nums.sort((a , b) => a - b).forEach((a, i) => a === target && ans.push(i))
    return ans 
};