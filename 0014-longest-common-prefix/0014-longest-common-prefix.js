/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
    let newStrs = strs.sort()
    let first = newStrs[0]
    let last = newStrs[newStrs.length - 1]

    let i = 0
    for (i = 0; i < first.length && first[i] === last[i]; i++) {
    }

    return first.slice(0, i)

};