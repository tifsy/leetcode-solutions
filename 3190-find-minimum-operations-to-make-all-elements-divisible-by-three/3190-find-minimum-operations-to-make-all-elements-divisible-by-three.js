/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let count = 0
    for(let num of nums){
        num % 3 !== 0 && count++ 
    }
    return count 
};