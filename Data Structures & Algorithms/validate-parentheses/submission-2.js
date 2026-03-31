class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const brackets = {
            "(": ")",
            "[": "]",
            "{": "}"
        }
        let stack = []
        for (let b of s) {
            if (brackets[b]) {
                stack.push(b)
            } else {
                if (stack.length === 0) return false;
                if (brackets[stack.pop()] !== b) return false;
                
            }
        }
        return stack.length === 0
    }
}
