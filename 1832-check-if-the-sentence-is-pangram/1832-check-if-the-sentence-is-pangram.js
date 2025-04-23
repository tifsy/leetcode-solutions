/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let alpha = 'qwertyuiopasdfghjklzxcvbnm'.split('')
    let isPangram = true

    for(let a of alpha){
        if(!sentence.includes(a)) isPangram = false
    }
    return isPangram
};