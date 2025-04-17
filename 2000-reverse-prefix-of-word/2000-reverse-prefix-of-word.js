/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let index = word.indexOf(ch)
    return [...word.slice(0, index + 1)].reverse().join('') + word.slice(index + 1)
};