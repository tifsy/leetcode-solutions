/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    let obj = {}
    
    for(let a of items1){
        obj[a[0]] = a[1]
    }

    for(let b of items2){
        obj[b[0]] ? obj[b[0]] += b[1] : obj[b[0]] = b[1]
    }
    return Object.entries(obj).map(([key, value]) => [Number(key), value])
}; 