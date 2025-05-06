/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    const str = s.toLowerCase()
    let count = 0
    
    for(let i = 0; i < str.length - 1; i++){
        str[i] !== str[i + 1] && count++
    }
    return count 
};