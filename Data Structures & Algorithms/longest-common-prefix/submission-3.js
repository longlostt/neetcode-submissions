class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = "";
        let minLen = Infinity;
        for(let str of strs){
            minLen = Math.min(minLen, str.length);
        }

        for(let i = 0; i < minLen; i++){
            let curChar = strs[0][i];
            for(let j = 0; j < strs.length; j++){
                if(strs[j][i] !== curChar){
                    return prefix;
                }
            }
            prefix += curChar;
        }
        return prefix
        console.log(prefix)
    }
}
