/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let arr = boxes.split('').map(Number)
    let ans = []

    for(let i in arr){
        let temp = []
        for(let j in arr){
            if(arr[j] === 1) temp.push(Math.abs(i - j))
        }
        ans.push(temp.reduce((acc, cur) => acc + cur, 0))
    }
    return ans 
};