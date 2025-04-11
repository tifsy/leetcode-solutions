/**
 * @param {number[]} nums
 * @return {number[]}
 */
 //array 
var findDisappearedNumbers = function(nums) {
    const set = new Set(nums)
    
    let arr = []
    for(let i = 1; i < nums.length + 1; i++){
        if(!set.has(i)) arr.push(i)
    }
    return arr
};