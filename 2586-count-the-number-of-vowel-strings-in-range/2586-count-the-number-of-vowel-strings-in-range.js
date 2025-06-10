/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    const vowel = new Set(['a', 'e', 'i', 'o', 'u'])
    let count = 0

    for(let word of words.slice(left, right + 1)){
        if(vowel.has(word[0]) && vowel.has(word[word.length - 1])) count++
    }
    return count 
};