class Solution {
    /**
     * @param {string[]} sentence1
     * @param {string[]} sentence2
     * @param {string[][]} similarPairs
     * @return {boolean}
     */
    areSentencesSimilar(sentence1, sentence2, similarPairs) {
        if(sentence1.length !== sentence2.length) return false;

        let pairs = new Set();

        for(const [key, value] of similarPairs){
            let str = `${key}#${value}`;
            pairs.add(str);
        }


        for(let i = 0; i < sentence1.length; i++){
            let w1 = sentence1[i];
            let w2 = sentence2[i];
            if( w1 == w2 ) continue;
            if(!pairs.has(`${w1}#${w2}`) && !pairs.has(`${w2}#${w1}`)) return false;
        }

        return true;
    }
}
