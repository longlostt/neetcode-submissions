class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        let result = 0;
        let neg = false;
        if (x < 0) neg = true;
        x = Math.abs(Math.floor(x));
        while (x > 0) {
            let val = x % 10;
            console.log(val);
            x = Math.floor(x / 10);
            result = result * 10 + val;
        }
        if (result <= Math.pow(2,31) && result >= Math.pow(-2,31)) {
            if (neg) {
                return result * -1;
            } else {
                return result;
            }
        } else {
            return 0;
        }
    }
}
