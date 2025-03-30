/**
 * @param {number[]} nums
 * @return {number}
 */
 //array, two pointers

var removeDuplicates = function(nums) {
    
    let loc = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== nums[loc]){
            loc++
            nums[loc] = nums[i]
        }
    }
    return loc + 1
};