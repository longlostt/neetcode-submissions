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

        for (let i = 0; i < wordsDict.length; i++) {
            if (wordsDict[i] == word1) len1.push(i);
            else if (wordsDict[i] == word2) len2.push(i);
        }

        let p1 = 0;
        let p2 = 0;
        while (p1 < len1.length && p2 < len2.length) {
            min = Math.min(min, Math.abs(len1[p1] - len2[p2]));
            if (len1[p1] < len2[p2]) {
                p1++;
            } else {
                p2++;
            }
        }
        return min;
    }
}
