/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    const newArr = s.split('|')
    let str = ''

    for(let i = 0; i < newArr.length; i += 2){
        str += newArr[i]
    }
    return [...str].filter(a => a === '*').length
};