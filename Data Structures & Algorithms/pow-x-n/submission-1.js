class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        function helper(x, n) {
            if (x == 0) return 0;
            if (n == 0) return 1;

            let res = helper(x * x, Math.floor(n / 2));

            return n % 2 == 0 ? res : x * res;
        }
        let ans = helper(x, Math.abs(n));
        return n >= 0 ? ans : 1 / ans;
    }
}
