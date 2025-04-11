/**
 * @param {number[]} nums
 * @return {number[]}
 */
 //array 
var findDisappearedNumbers = function(nums) {

    let arr = []
    for(let i = 1; i <= nums.length; i++){
        arr.push(i)
    }
    return arr.filter(a => !nums.includes(a))
};