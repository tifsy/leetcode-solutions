/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function(word) {
    let total = 0
    let cur = 'a'.charCodeAt(0)

    for(let i = 0; i < word.length; i++){
        const tar = word.charCodeAt(i)
        const diff = Math.abs(tar - cur)

        total += Math.min(diff, 26 - diff)
        cur = tar
    }
    total += word.length
    
    return total
};