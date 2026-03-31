class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        word1 = word1.split('');
        word2 = word2.split('');
        let str = "";
        let secondTurn = false;
        while(word1.length && word2.length){
            if(secondTurn){
                str += word2.splice(0, 1);
                secondTurn = false;
            } else {
                str += word1.splice(0, 1);
                secondTurn = true;
            }
        }

        if(word1.length>0){
            for(let char of word1){
                str += char;
            }
        } else {
            for(let char of word2){
                str += char;
            }
        }
        return str
    }
}
