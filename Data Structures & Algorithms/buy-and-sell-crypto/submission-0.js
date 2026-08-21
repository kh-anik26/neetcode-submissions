class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let result = 0;

        for(let i =0; i < prices.length - 1; i ++){
            for(let j = i + 1; j < prices.length; j ++){
                let profit = (prices[j] - prices[i]);
                result = Math.max(result, profit);
            }
        }
        return result;
    }
}
