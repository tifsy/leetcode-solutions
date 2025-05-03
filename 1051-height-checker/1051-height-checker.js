/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const sorted = [...heights].sort((a, b) => a - b)
    let count = 0
    
    for(let i = 0; i < heights.length; i++){
        heights[i] !== sorted[i] && count++
    }
    return count
};