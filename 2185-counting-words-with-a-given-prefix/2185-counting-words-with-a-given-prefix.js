/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let len = pref.length
    let count = 0

    for(let word of words){
        word.slice(0, len) === pref && count++
    }
    return count 
};