/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    let arr = sentence.split(' ')
    const len = arr.length 
    
    for(let i = 0; i < len; i++){
        const cur = arr[i]
        const next = arr[(i + 1) % len]

        if(cur[cur.length - 1] !== next[0]) return false 
    }
    return true 
};