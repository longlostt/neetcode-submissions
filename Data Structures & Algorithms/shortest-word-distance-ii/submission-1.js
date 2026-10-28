class WordDistance {
    /**
     * @param {string[]} wordsDict
     */
    constructor(wordsDict) {
        this.wordsDict = new Map();
        for(let i = 0; i < wordsDict.length; i++){
            if(!this.wordsDict.has(wordsDict[i])){
                this.wordsDict.set(wordsDict[i], [])
            }
            this.wordsDict.get(wordsDict[i]).push(i);
        }
    }

    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    shortest(word1, word2) {
        let len1 = this.wordsDict.get(word1);
        let len2 = this.wordsDict.get(word2);
        let min = Infinity;

        for(let i = 0; i < len1.length; i++){
            for(let j = 0; j < len2.length; j++){
                min = Math.min(min, Math.abs(len1[i] - len2[j]))
            }
        }
        return min;
    }
}

/**
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */
