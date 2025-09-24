/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    const dis = Math.abs(x - z) - Math.abs(y - z) 

    return dis > 0 ? 2 : dis === 0 ? 0 : 1


};