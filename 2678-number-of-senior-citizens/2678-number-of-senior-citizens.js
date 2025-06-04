/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let count = 0

    for(let a of details){
        a.slice(11, 13) > 60 && count++
    }
    return count 
};