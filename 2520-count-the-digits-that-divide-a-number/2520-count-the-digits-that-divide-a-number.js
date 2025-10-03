/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    const arr = String(num).split('')
    let count = 0

    for(let a of arr){
        if(num % a === 0) count++
    }
    return count
};