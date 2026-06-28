class Solution {
    /**
     * @param {string} haystack
     * @param {string} needle
     * @return {number}
     */
    strStr(haystack, needle) {
        for (let i = 0; i < haystack.length - needle.length + 1; i++) {
            let match = true;
            let hPtr = i;
            for (let j = 0; j < needle.length; j++) {
                if (haystack[hPtr] !== needle[j]) {
                    match = false;
                    break;
                }
                hPtr++;
            }

            if (match) return i;
        }
        return -1;
    }
}
