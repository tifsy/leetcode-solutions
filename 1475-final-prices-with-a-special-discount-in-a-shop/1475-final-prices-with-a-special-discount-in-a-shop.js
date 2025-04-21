/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let ans = []

    for(let i = 0; i < prices.length; i++){
        let disc = 0

        for(let j = i + 1; j < prices.length; j++){
            if(prices[j] <= prices[i]) {
                disc = prices[j]
                break
            }
        }
        ans.push(prices[i] - disc)
    }
    return ans 
};