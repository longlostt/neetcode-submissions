class Solution {
    /**
     * @param {string} allowed
     * @param {string[]} words
     * @return {number}
     */
    countConsistentStrings(allowed, words) {
        let allowedSet = new Set(allowed.split(''));
        let cnt = 0;
        let matches = true;
        for(let word of words){
            for(let char of word){
                if(!allowedSet.has(char)){
                    matches = false;
                } 
            }
            if(matches){
                cnt++
            }
            matches = true;
        }
        return cnt;


    }
}
