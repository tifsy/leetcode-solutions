/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let ans = []

    for(let a of operations){
        if(a === 'D') ans.push(ans[ans.length - 1] * 2)
        else if(a === 'C') ans.pop()
        else if(a === '+') ans.push(ans[ans.length - 1] + ans[ans.length - 2])
        else ans.push(Number(a))
    }

    return ans.reduce((acc, cur) => acc + cur, 0)
};