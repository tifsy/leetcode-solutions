/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    const len = digits.length 
    const ans = new Set()

    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
            for(let k = 0; k < len; k++){
                if(i !== j && j !== k && k !== i){
                    let num = `${digits[i]}${digits[j]}${digits[k]}`
                    
                    if(num[0] !== '0' && num % 2 === 0) ans.add(Number(num))
                }
            }
        }
    }
    return Array.from(ans).sort((a, b) => a - b)
};