class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // keep a dictionary to keep count of most frequent char in the window
        
        // move right pointer as long as it's possible to make the 
        // entire window the same char (most frequent from the hash map)
        
        // otherwise, move both left and right
        // once done, return the length of the window

        // loop stays true as long as (window size - maxfreq) <= k

        let freqMap = new Map();
        let l = 0;
        let r = 0;
        let maxFreq = 0;

        for(r = 0; r<s.length; r++){
            freqMap.set(s[r], (freqMap.get(s[r]) || 0) + 1)
            maxFreq = Math.max(freqMap.get(s[r]), maxFreq); 
            if(((r-l+1) - maxFreq) > k){
                freqMap.set(s[l],freqMap.get((s[l]) || 0 ) - 1)
                l++;
            }
        }
        return r-l;
    }
}
