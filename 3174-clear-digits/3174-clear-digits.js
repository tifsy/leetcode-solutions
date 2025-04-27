/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let stack = []

    for(let a of s){
        if(/[0-9]/.test(a)){
            stack.length > 0 && stack.pop()
        }
        else {
            stack.push(a)
        }
    }
    return stack.join('')
};