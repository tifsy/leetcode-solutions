/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let ans = 0 

    for(let a of s){
        ans += Math.abs(s.indexOf(a) - t.indexOf(a))
    }
    return ans 
};