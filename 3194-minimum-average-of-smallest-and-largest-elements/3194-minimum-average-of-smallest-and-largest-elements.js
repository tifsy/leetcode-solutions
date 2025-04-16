/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    let avg = []

    nums.sort((a, b) => a - b)

    while(nums.length > 0){
        const min = nums.shift()
        const max = nums.pop()
        avg.push((min + max) / 2)
    }

    return Math.min(...avg)
};