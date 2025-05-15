/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const a = s.slice(0, s.length / 2)
    const b = s.slice(s.length / 2)

    let aCount = 0
    let bCount = 0

    for(let char of a){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'){
            aCount++
        }
    }

    for(let char of b){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'){
            bCount++
        }
    }
    
    return aCount === bCount
};