/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const chunked = []
    const len = arr.length

    for(let i = 0; i < len; i += size){
        const chunk = arr.slice(i, i + size)

        chunked.push(chunk)
    }
    return chunked
};
