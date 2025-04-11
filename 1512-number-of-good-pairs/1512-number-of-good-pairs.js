/**
 * @param {number[]} nums
 * @return {number}
 */
//hash map 

var numIdenticalPairs = function(nums) {
    const map = {}
    let count = 0

    for(let a of nums){
        if(map[a]){
            count += map[a]
            map[a]++
        }
        else map[a] = 1
    }
    return count

};