class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let cache = new Map();
        function recursion(i) {
            if(cache.get(i)) return cache.get(i);
            if (i > n) return 0;
            if (i == n) {
                return 1;
            }
            let leftVal = recursion(i + 1);
            let rightVal = recursion(i + 2);
            let cnt = leftVal + rightVal;
            cache.set(i, cnt); 
            return cnt;
        }
        return recursion(0);
    }
}
