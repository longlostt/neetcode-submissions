class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let l = 0;
        for(let r = 1; r < prices.length; r++){
            let newProfit = prices[r] - prices[l];
            while(newProfit < 0){
                l++;
                newProfit = prices[r] - prices[l];
            }
            profit = Math.max(profit, newProfit);

        }
        return profit
    }
}
