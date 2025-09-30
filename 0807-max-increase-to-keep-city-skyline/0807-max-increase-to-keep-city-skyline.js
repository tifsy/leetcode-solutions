/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let ans = 0
    const n = grid.length

    const rowMax = grid.map((row) => Math.max(...row))
    const colMax = Array(n).fill(0)

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            colMax[j] = Math.max(colMax[j], grid[i][j])
        }
    }

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            const tar = Math.min(rowMax[i], colMax[j])
            
            if(tar > grid[i][j]) ans += tar - grid[i][j]
        }
    }
    return ans 
};