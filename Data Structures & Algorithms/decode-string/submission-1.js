class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let stringStack = [];
        let numStack = [];
        let cur = "";
        let k = 0;

        for (let c of s) {
            if (!isNaN(c)) {
                k = k * 10 + Number(c);
            } else if (c == "[") {
                stringStack.push(cur);
                numStack.push(k);
                k = 0;
                cur = "";
            } else if (c == "]") {
                let mult = numStack.pop();
                let prev = stringStack.pop();
                let newVal = "";
                for(let i = 0; i < mult; i++){
                    newVal += cur;
                }
                cur = prev + newVal;
            } else {
                cur += c;
            }
        }
        return cur;
    }
}
