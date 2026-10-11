class Solution {
    /**
     * @param {character[]} chars
     * @return {number}
     */
    compress(chars) {
        if (chars.length == 1) return 1;

        let cnt = 0;
        let k = 0;

        function buildSubArr(char, cnt) {
            let arr = (char + cnt).split("");
            let bound = arr.length;
            for (let iter = 0; iter < bound; iter++) {
                chars[k] = arr[iter];
                k++;
            }
        }

        let right = 0;
        while (right < chars.length) {
            let curChar = chars[right];
            while (curChar == chars[right]) {
                cnt++;
                right++;
                if (right == chars.length) {
                    break;
                }
            }
            let trueCnt = cnt == 1 ? "" : String(cnt);
            buildSubArr(curChar, trueCnt);
            cnt = 0;
        }
        return k;
    }
}
