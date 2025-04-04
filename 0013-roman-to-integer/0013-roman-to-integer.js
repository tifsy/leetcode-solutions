/**
 * @param {string} s
 * @return {number}
 */

//hashtable, math, string 

var romanToInt = function (s) {
    const roman = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    }
    let sum = 0

    for (let i = 0; i < s.length; i++) {

        const cur = roman[s[i]]
        const nxt = roman[s[i + 1]]

        if (nxt && cur < nxt) {
            sum -= cur;
        } else {
            sum += cur;
        }
    }
    return sum
};