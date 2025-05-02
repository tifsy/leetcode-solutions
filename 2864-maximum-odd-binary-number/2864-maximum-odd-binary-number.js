/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    const one = s.split('').filter(a => a === '1').length
    const zero = s.length - one

    return '1'.repeat(one - 1) + '0'.repeat(zero) + '1'
};