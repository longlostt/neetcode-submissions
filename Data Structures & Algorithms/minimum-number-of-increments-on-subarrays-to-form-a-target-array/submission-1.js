class Solution {
    /**
     * @param {number[]} target
     * @return {number}
     */
    minNumberOperations(target) {
        let cnt = target[0];
        for(let i = 1; i < target.length; i++){
            if(target[i-1] < target[i]) cnt += target[i] - target[i-1];
        }
        return cnt;
    }
}
