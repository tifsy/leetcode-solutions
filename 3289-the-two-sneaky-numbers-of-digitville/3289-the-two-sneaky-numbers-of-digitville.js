/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let count = {}

    for(let num of nums){
        count[num] ? count[num]++ : count[num] = 1
    }
    return Object.keys(count).filter(key => count[key] === 2).map(Number)
}