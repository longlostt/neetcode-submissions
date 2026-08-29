class Solution {
    /**
     * @param {string} s
     * @return {string}
     */

    longestPalindrome(s) {
        let maxStr = "";

        for (let i = 0; i < s.length; i++) {
            isPalindrome(i, i);
            isPalindrome(i, i + 1);
        }

        return maxStr;

        function isPalindrome(l, r) {
            let curStr = "";
            while (l >= 0 && r < s.length) {
                if (s[l] !== s[r]) break;
                if (l == r) {
                    curStr = s[l];
                } else {
                    curStr = s[l] + curStr + s[r];
                }
                l--;
                r++;
            }
            maxStr = maxStr.length > curStr.length ? maxStr : curStr;
        }
    }
}
