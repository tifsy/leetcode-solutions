/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let freq = []

    for(let a of s){
        freq[a] ? freq[a]++ : freq[a] = 1
        if(freq[a] === 2) return a
    }
};