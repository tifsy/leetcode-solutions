/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let ans = numBottles

    while(numBottles >= numExchange){
        const newBottles = Math.floor(numBottles / numExchange)
        
        ans += newBottles
        numBottles = numBottles % numExchange + newBottles
    }
    return ans 
};