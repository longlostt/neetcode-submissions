class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let map = new Map([
                ['}' , '{'],
                [')' , '('],
                [']' , '['],
            ]);
        for(let char of s){
            if(!(map.has(char))){ // means its an opening bracket
                stack.push(char);
            } else { // its a closing bracket
                let opening = map.get(char);
                if(stack[stack.length-1] !== opening) return false;
                else {
                    stack.pop();
                }
            }
        }
        return stack.length > 0 ? false : true;
    }
}
