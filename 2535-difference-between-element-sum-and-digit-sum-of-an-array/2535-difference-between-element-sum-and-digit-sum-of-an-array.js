/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let element = nums.reduce((a, r) => a + r, 0)
    let digit = 0
    
    for(let a of nums){
       digit += [...String(a)].map(Number).reduce((a, r) => a + r, 0)
    }
    return Math.abs(element - digit)
};