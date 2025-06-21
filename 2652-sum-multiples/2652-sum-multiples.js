/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    const arr = Array(n).fill(0).map((_, i) => i + 1)
    let sum = 0
    
    for(let a of arr){
        if(a % 3 === 0 || a % 5 === 0 || a % 7 === 0) sum += a
    }
    return sum 
};