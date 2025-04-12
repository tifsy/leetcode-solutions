/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const set = new Set(allowed)

    let count = 0
    for(let word of words){
        let isConsistent = true 
        for(let char of word){
            if(!set.has(char)) {
                isConsistent = false 
                break
            }
        }
        
        isConsistent && count++ 
        
    }
    return count 
};