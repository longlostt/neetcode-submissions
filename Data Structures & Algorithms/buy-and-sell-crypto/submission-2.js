class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let profit = 0;
        for(let r = 1; r < prices.length; r++){
            profit = Math.max(profit, (prices[r] - prices[l]));
            while(prices[r] < prices[l]){
                l++;
            }
        }
        return profit;
    }
}
