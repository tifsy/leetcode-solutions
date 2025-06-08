/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    let ans = []

    for(let word of words){
        ans.push(...word.split(separator).filter(s => s.length !== 0))
    }
    return ans 
};