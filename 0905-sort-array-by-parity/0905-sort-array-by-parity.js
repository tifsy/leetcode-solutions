/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let ans = []

    for(let num of nums){
        num % 2 === 0 ? ans.unshift(num) : ans.push(num)
    }
    return ans 
};