class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let cache = new Map(); // remaining -> cnt
        function dp(amount) {
            let minimum = Infinity;
            if (amount == 0) return 0;
            if (amount < 0) return -1;
            if (cache.has(amount)) return cache.get(amount);
            for (let coin of coins) {
                let nxt = 1 + dp(amount - coin);
                if (amount - coin >= 0 && nxt > 0) {
                    minimum = Math.min(minimum, nxt);
                }
            }
            if (minimum >= Infinity) {
                cache.set(amount, -1);
                return -1;
            } else {
                cache.set(amount, minimum);
                return minimum;
            }
        }
        return dp(amount);
    }
}
