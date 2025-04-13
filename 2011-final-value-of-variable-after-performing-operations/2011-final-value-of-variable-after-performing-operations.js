/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let value = 0
    
    for(let op of operations){
        if(op === '--X' || op === 'X--') value--
        else value++
    }
    return value 
};