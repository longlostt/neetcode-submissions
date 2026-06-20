class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let n = nums.length;
        for(let i = 0; i < n+1; i++){
            if(!nums.includes(i)) return i;
        }
    
    }
}
