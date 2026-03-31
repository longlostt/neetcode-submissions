class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let maxPal = "";
        for (let i = 0; i < s.length; i++) {
            isPalindrome(i, i);
            isPalindrome(i, i + 1);

        }
        function isPalindrome(l, r) {
            let curPal = l === r ? s[l] : "";
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                if(l !== r ) curPal = s[l] + curPal + s[r];
                else curPal = s[l]
                l--;
                r++;
            }
            if (curPal.length > maxPal.length) {
                maxPal = curPal;
            }
        }
        return maxPal;
    }
}