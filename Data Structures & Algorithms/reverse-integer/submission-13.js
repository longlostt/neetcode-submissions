class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        let result = 0;
        while (x !== 0) {
            result = result * 10 + Math.trunc(x % 10);
            x = Math.trunc(x / 10);
        }
        if (result <= Math.pow(2, 31) && result >= Math.pow(-2, 31)) {
            return result;
        } else {
            return 0;
        }
    }
}
