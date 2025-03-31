/**
 * @param {number} n
 * @return {number}
 */

 //fibonacci 
var climbStairs = function(n) {
    let fibonacci = [1, 2]

    for(let i = 2; i < n; i++){
        fibonacci[i] = (fibonacci[i - 1] + fibonacci[i - 2])
    }

    return fibonacci[n - 1]
};