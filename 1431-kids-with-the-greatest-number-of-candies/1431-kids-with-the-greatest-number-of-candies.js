/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let ans = []

    for(let i in candies){
        let temp = [...candies]
        temp[i] += extraCandies

        let res = false 
        if(Math.max(...temp) === temp[i]){
            res = true
        }
        ans.push(res)
    }

    return ans 
};