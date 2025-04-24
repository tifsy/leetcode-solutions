/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let ans = 0

    for(let i = 0; i < arr.length; i++){
        for(let j = i; j < arr.length; j += 2){
            let newArr = arr.slice(i, j + 1)
            ans += newArr.reduce((acc, cur) => acc + cur, 0)
        }
    }
    return ans
};