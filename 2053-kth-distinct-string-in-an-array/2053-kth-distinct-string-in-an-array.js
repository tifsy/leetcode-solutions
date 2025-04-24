/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    const freq = {}

    for(let a of arr){
        freq[a] ? freq[a]++ : freq[a] = 1
    }

    const count = Object.keys(freq).filter(key => freq[key] === 1)
    return count[k - 1] || ''
};