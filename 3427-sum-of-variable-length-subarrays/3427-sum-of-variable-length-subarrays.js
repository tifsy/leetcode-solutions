/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function(nums) {
    let ans = 0
    for(let i = 0; i < nums.length; i++){
        ans += nums.slice(Math.max(0, i - nums[i]), i + 1).reduce((acc, cur) => acc + cur, 0)
    }
    return ans
};