/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let even = 0
    let odd = 0

    for(let i = 0; i < num.length; i++){
        i % 2 === 0 ? even += +num[i] : odd += +num[i]
    }
    return odd === even
};