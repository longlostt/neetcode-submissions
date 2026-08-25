class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let seen = new Set();
        let l = 0;
        let max = 0;
        for(let r = 0; r < s.length; r++){
            if(!seen.has(s[r])) seen.add(s[r]);
            else{
                while(seen.has(s[r])){
                    seen.delete(s[l]);
                    l++;
                }
                seen.add(s[r]);
            }
            max = Math.max(max, seen.size);
        }
        return max
    }
}
