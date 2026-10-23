class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    maxSubarrayLength(nums, k) {
        let l = 0;
        let r = 0;
        let freqCnt = new Map();
        let max = 0;
        while (r < nums.length) {
            if (freqCnt.get(nums[r]) == k) {
                while (freqCnt.get(nums[r]) == k) {
                    freqCnt.set(nums[l], freqCnt.get(nums[l]) - 1);
                    l++;
                }
            }

            freqCnt.set(nums[r], (freqCnt.get(nums[r]) || 0) + 1);
            max = Math.max(max, r - l + 1);
            r++;
        }
        return max;
    }
}
