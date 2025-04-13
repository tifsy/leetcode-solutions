/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let value = 0
    operations.forEach(op => op.includes('--') ? value-- : value++)
    return value
};