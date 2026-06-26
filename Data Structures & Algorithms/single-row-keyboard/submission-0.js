class Solution {
    /**
     * @param {string} keyboard
     * @param {string} word
     * @return {number}
     */
    calculateTime(keyboard, word) {
        let res = 0;
        let idxMap = new Map();
        for (let i = 0; i < keyboard.length; i++) {
            idxMap.set(keyboard[i], i);
        }
        let num1 = 0;
        for(let i = 0; i < word.length; i++){
            res += Math.abs(num1 - idxMap.get(word[i]));
            num1 = idxMap.get(word[i]);
        }
        return res
    }
}
