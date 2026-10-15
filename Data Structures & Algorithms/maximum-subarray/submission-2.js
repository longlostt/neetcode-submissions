class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = -Infinity;
        let curSum = 0;
        for(let i = 0; i < nums.length; i++){
            curSum += nums[i];
            maxSum = Math.max(maxSum, curSum);
            if(curSum < 0) {
                curSum = 0;
            }
        }

        return maxSum;
    }
}
