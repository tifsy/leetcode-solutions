/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let ans = []
    
    for(let a of nums){
        ans = [...ans, ...String(a)]
    }
    return ans.map(Number)
};