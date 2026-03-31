class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];
        let result = 0;
        for(let op of operations){
            console.log(result, stack, op)
            if(op == '+'){
                let addend1 = stack[stack.length - 1];
                let addend2 = stack[stack.length - 2];
                stack.push(Number(addend1) + Number(addend2))
            } else if (op == 'C'){
                stack.pop()
            } else if (op == 'D'){
                let lastDouble = stack[stack.length-1]*2;
                stack.push(lastDouble);
            } else {
                stack.push(Number(op));
            }
        }
        for(let record of stack){
            result += record;
        }
        return result;
    }
}
