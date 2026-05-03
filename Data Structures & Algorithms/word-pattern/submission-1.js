class Solution {
    /**
     * @param {string} pattern
     * @param {string} s
     * @return {boolean}
     */
    wordPattern(pattern, s) {
        let patternToString = new Map();
        let stringToPattern = new Map();
        s = s.split(' ');
        if(pattern.length !== s.length) return false;

        for(let i = 0; i < pattern.length; i++){
            if(patternToString.has(pattern[i]) || stringToPattern.has(s[i])){
                if(patternToString.get(pattern[i]) !== s[i] && stringToPattern.get(s[i]) !== pattern[i]) return false;
            } else {
                patternToString.set(pattern[i], s[i]);
                stringToPattern.set(s[i], pattern[i]);
            }
        }
        return true;
    }
}
