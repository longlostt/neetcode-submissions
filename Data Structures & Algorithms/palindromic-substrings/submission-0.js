class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let total = 0;
        function res(l, r) {
            let cnt = 0;
            while (l >= 0 && r < s.length && s[l] == s[r]) {
                l--;
                r++;
                cnt++;
            }
            return cnt;
        }
        for(let i = 0; i < s.length; i++){
            total += res(i,i);
            total += res(i,i+1);
        }
        return total
    }
}
