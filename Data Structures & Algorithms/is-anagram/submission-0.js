class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let freqMap = new Map();
        for (let char of s) {
            freqMap.set(char, (freqMap.get(char) || 0) + 1)
        }
        for (let char of t) {
            freqMap.set(char, freqMap.get(char) - 1)
        }
        for (let value of freqMap.values()) {
            if (value !== 0) {
                return false;  // If any frequency isn't zero, it's not an anagram
            }
        }
        return true;
    }
}
