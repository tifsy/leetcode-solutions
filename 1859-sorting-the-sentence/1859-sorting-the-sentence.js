/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const arr = s.split(' ')

    let ans = []

    for(let a of arr){
        const index = [...a].pop()
        const str = a.substring(0, a.length - 1)

        ans[index - 1] = str
    }
    return ans.join(' ')
};