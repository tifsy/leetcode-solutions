/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let ans = [[1]]

    for(let i = 1; i < numRows; i++){
        let prev = ans[i - 1]
        let row = [1]

        for(let j = 1; j < prev.length; j++){
            row.push(prev[j - 1] + prev[j])
        }
        row.push(1)
        ans.push(row)
    }
    return ans 
};