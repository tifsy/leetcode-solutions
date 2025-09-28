/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    //coersion multiply only works for small numbers under 16 digits 

    if(num1 === '0' || num2 === '0') return '0'

    let len1 = num1.length
    let len2 = num2.length
    let res = Array(len1 + len2).fill(0)

    for(let i = len1 - 1; i >= 0; i--){
        for(let j = len2 - 1; j >= 0; j--){
            let prod = (num1[i] - '0') * (num2[j] - '0')
            let sum = prod + res[i + j + 1]

            res[i + j + 1] = sum % 10
            res[i + j] += Math.floor(sum / 10)
        }
    }

    while(res[0] === 0){
        res.shift()
    }
    return res.join('')
};
