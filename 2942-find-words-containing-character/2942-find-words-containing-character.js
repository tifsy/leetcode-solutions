/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let ans = []
    for(let word of words){
        if(word.includes(x)){
            ans.push(words.indexOf(word))
        }
    }
    return ans 
};