/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let ans = ''

    for(let i = 0; i < s.length; i++){
        s[i] === 'i' ? ans = ans.split('').reverse().join('') : ans += s[i]
    }
    return ans 
};