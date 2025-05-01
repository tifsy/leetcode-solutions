/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let a of words){
        if(a === a.split('').reverse().join('')) return a 
    }
    return ''
};