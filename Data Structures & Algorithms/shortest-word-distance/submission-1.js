class Solution {
    /**
     * @param {string[]} wordsDict
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    shortestDistance(wordsDict, word1, word2) {
        let len1 = [];
        let len2 = [];
        let min = Infinity;

        for(let i = 0; i < wordsDict.length; i++){
            if(wordsDict[i] == word1) len1.push(i);
            else if(wordsDict[i] == word2) len2.push(i);
        }


        for(let i = 0; i < len1.length; i++){
            for(let j = 0; j < len2.length; j++){
                min = Math.min(min, Math.abs(len1[i] - len2[j]))
            }
        }
        return min
    }
}
