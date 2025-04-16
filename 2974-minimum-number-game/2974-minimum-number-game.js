/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    nums.sort((a, b) => a - b)

    let ans = []
    
    for(let i = 0; i < nums.length / 2; i++){
        ans.push(nums[2 * i + 1])
        ans.push(nums[2 * i])
    }
    return ans 
};