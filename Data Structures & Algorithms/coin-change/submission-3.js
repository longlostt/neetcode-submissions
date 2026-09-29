class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        if(amount == 0) return 0;
        
        let cache = new Map(); // running sum -> smallest # of coins left to reach "amount"
        function dp(sum){
            if(sum > amount) return -1;
            if(sum == amount) return 0;
            if(cache.has(sum)){
                return cache.get(sum);
            }
            
            let minCoins = Infinity
            for(let coin of coins){
                let cnt = dp(sum + coin);
                if(cnt !== -1){
                    minCoins = Math.min(minCoins, 1+cnt)
                } 
            }
            let ans = minCoins == Infinity ? -1 : minCoins;
            cache.set(sum,ans);
            return ans;
        }
        dp(0);
        return cache.get(0); // 0 -> smallest # of coins left to reach from start to end 
        
    }
}
