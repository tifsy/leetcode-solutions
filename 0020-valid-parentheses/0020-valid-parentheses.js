/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    for(let c of s){
        if('([{'.includes(c) ){
            stack.push(c)
        }
        else if(stack.length === 0 || stack.pop() !== map[c]){
            return false 
        }
    }
    return stack.length === 0
};