class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let tMap = new Map();
        let freqMap = new Map();
        for(let char of t){
            tMap.set(char, (tMap.get(char) || 0) + 1)
        }
        let l = 0;
        let need = tMap.size;
        let have = 0;
        let leftSub = 0;
        let rightSub = Infinity;
        // let subLen = Infinity;
        for(let r = 0; r < s.length; r++){
            freqMap.set(s[r], (freqMap.get(s[r]) || 0) + 1);
            if(freqMap.get(s[r]) === tMap.get(s[r])){
                have++;
            }
            while(have == need){
                if((rightSub - leftSub) + 1 > r - l + 1){
                    leftSub = l;
                    rightSub = r;
                }
                if(freqMap.get(s[l]) === tMap.get(s[l])){
                    have--;
                }
                freqMap.set(s[l], (freqMap.get(s[l]) || 0) - 1);
                l++;
            }
        }
        if(rightSub == Infinity) return "";
        return s.slice(leftSub, rightSub+1);
    }
}
