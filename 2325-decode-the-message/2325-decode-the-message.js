/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let alr = ''

    for(let a of key){
        if(a !== ' ' && !alr.includes(a)) alr += a
    }
    return [...message].map(a => a === ' ' ? ' ' : String.fromCharCode(97 + alr.indexOf(a))).join('')
};