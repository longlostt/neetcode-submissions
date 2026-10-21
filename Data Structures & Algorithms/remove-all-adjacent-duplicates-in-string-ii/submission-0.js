class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {string}
     */
    removeDuplicates(s, k) {
        let stack = [];

        for (let char of s) {
            if (stack.length >= 1)
                if (stack[stack.length - 1][0] == char) {
                    stack[stack.length-1][1] += 1;
                } else {
                    stack.push([char, 1])
                }
            else { // empty stack
                stack.push([char, 1])
            }

            if(stack[stack.length-1][1] == k) stack.pop();

        }
        return stack.map((a) => a[0].repeat(a[1])).join('');
    }
}
