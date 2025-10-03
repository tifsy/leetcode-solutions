/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let ans = 0
    let count = 0

    for(let a of s){
        if(a === 'L') count++
        else count--

        if(count === 0) ans++
    }
    return ans 
};