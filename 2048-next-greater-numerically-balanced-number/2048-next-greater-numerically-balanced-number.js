/**
 * @param {number} n
 * @return {number}
 */
var nextBeautifulNumber = function(n) {
    //brute force

    const isBalanced = (num) => {
        const str = String(num)
        const count = new Array(10).fill(0)

        for(let a of str){
            if(a === '0') return false
            count[Number(a)]++
        }

        for(let i = 1; i <= 9; i++){
            if(count[i] > 0 && count[i] !== i) return false
        }
        return true 
    }

    let num = n + 1

    while(true){
        if(isBalanced(num)) return num
        num++
    }
};