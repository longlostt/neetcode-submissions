class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let set = new Set(nums);
        for(let i = 0; i < nums.length+1; i++){
            if(!set.has(i)) return i;
        }
    
    }
}
