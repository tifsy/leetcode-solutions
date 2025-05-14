/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let vowFreq = {}
    let conFreq = {}

    for(let a of s){
        if(a === 'a' || a === 'e' || a === 'i' || a === 'o' || a === 'u'){
            vowFreq[a] ? vowFreq[a]++ : vowFreq[a] = 1
        }
        else conFreq[a] ? conFreq[a]++ : conFreq[a] = 1
    }

    const maxVow = Object.values(vowFreq).length > 0 ? Math.max(...Object.values(vowFreq)) : 0 
    const maxCon = Object.values(conFreq).length > 0 ? Math.max(...Object.values(conFreq)) : 0 

    return maxVow + maxCon 
};