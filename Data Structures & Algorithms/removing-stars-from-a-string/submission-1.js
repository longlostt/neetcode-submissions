class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    removeStars(s) {
        let ans = [];
        s = s.split("");

        let starCount = 0;
        for (let i = s.length - 1; i >= 0; i--) {
            if (s[i] === "*") {
                starCount++;
            } else if (starCount > 0) {
                starCount--; // skip this letter
            } else {
                ans.push(s[i]); // keep this letter
            }
        }
        ans = ans.reverse().join("");
        return ans;
    }
}
