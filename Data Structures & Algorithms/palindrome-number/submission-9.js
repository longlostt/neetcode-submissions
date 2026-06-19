class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x) {
        if (x < 0 || (x % 10 == 0 && x !== 0)) return false; // negatives and numbers ending in '0' cannot be palindromes
        let reversedRight = 0;

        while (x > reversedRight) {
            let digit = x % 10;
            reversedRight = reversedRight * 10 + digit;
            x = Math.floor(x / 10);
        }
        console.log(x, reversedRight)
        return x === reversedRight || x === Math.floor(reversedRight / 10);
    }
}
