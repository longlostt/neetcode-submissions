class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let carry = false;
        for (let i = digits.length - 1; i >= 0; i--) {
            if (i == digits.length - 1 && digits[i] < 9) {
                digits[i]++;
                break;
            } else {
                if (carry) {
                    if (digits[i] < 9) {
                        digits[i]++;
                        break;
                    } else {
                        digits[i] = 0;
                    }
                } else {
                    if (digits[i] < 9) {
                        digits[i]++;
                        break;
                    } else {
                        digits[i] = 0;
                        carry = true;
                    }
                }
            }
        }
        if(digits[0] == 0) digits.unshift(1);
        return digits;
        // console.log(digits);
    }
}
