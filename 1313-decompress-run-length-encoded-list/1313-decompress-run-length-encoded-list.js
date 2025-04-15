/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let ans = []
    
    for(let i = 0; i < nums.length / 2; i++){
        ans.push(...Array(nums[2 * i]).fill(nums[2 * i + 1]))
    }
    return ans 
};