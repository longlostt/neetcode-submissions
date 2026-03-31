class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numMap = new Map();
        for (let num of nums) {
            if(numMap.has(num)){
                return true;
            }
            numMap.set(num, true);
        }
        return false;
    }
}
