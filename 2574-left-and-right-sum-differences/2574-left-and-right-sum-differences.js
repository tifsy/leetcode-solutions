/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    const sum = nums.reduce((acc, cur) => acc + cur, 0)
    let ans = []

    for(let i = 0; i < nums.length; i++){
        let leftSum = nums.slice(0, i).reduce((acc, cur) => acc + cur, 0)
        let rightSum = nums.slice(i + 1).reduce((acc, cur) => acc + cur, 0);

        ans.push(Math.abs(leftSum - rightSum))
    }
    return ans 
};