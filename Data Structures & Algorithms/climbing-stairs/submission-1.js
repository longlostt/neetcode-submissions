class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let arr = [];
        function recursion(i) {
            if(arr[i]) return arr[i];
            if (i > n) return 0;
            if (i == n) {
                return 1;
            }
            let leftVal = recursion(i + 1);
            let rightVal = recursion(i + 2);
            let cnt = leftVal + rightVal;
            arr[i] = cnt; 
            return cnt;
        }
        return recursion(0);
    }
}
