class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let s1FreqMap = new Map();
        let s2FreqMap = new Map();
        if(s1.length > s2.length) return false;
        for(let char of s1){
            s1FreqMap.set(char, (s1FreqMap.get(char) || 0 ) + 1)
        }

        let left = 0;
        
        for(let right = 0; right < s2.length; right++){
            s2FreqMap.set(s2[right], (s2FreqMap.get(s2[right]) || 0 ) + 1)
            if((right-left+1) > s1.length){
                s2FreqMap.set(s2[left], s2FreqMap.get(s2[left]) - 1)
                if(s2FreqMap.get(s2[left]) === 0 ) s2FreqMap.delete(s2[left])
                left++
            }
            if((right-left+1) === s1.length){
                if(this.compareMaps(s1FreqMap, s2FreqMap)) return true;
            }
        }
        return false;
    }

    compareMaps(map1, map2){
        if (map1.size !== map2.size) return false
        for(let [key, value] of map1){
            if(map2.get(key) !== value){
                return false
            }
        }
        return true
    }
}
