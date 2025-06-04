/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    const len = code.length
    
    return code.map((_, i) => {
        let sum = 0

        if (k === 0) return 0
        
        for(let j = 1; j <= Math.abs(k); j++){
            sum += code[(i + ((k > 0) ? j : -j) + len) % len]
        }
        return sum 
    })
};