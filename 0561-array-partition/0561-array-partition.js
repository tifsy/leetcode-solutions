/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    const sorted = nums.sort((a, b) => a - b)
    let ans = 0

    for(let i = 0; i < sorted.length; i += 2){
        ans += sorted[i]
    }
    return ans
};