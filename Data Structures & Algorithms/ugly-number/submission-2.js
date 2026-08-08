class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isUgly(n) {
        if(n <= 0) return false;

        for(let val of [2,3,5]){
            while(n % val == 0){
                n /= val;
            }
        }

        return n == 1;
    }
}
