class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for(let i = 0; i < strs.length; i++){
            res += `${strs[i].length}#` + strs[i];
        }
        console.log(res)
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;
        while(i < str.length){
            let delimIdx = str.indexOf("#", i);
            let len = Number(str.substring(i, delimIdx));
            let iter = 0;
            i = delimIdx+1;
            let buildStr = "";
            while(iter < len){
                buildStr += str[i];
                iter++;
                i++;
            }
            res.push(buildStr)
        }

        return res;
    }
}
