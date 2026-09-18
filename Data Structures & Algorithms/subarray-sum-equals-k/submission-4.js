class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let res = 0;
        let curSum = 0;

        let prefixSum = new Map(); // sum -> cnt;
        prefixSum.set(0, 1); // sum of 0 found once;

        for (let num of nums) {
            curSum += num;
            let diff = curSum - k;
            res += prefixSum.get(diff) || 0;
            prefixSum.set(curSum, (prefixSum.get(curSum) || 0 ) + 1);
        }
        return res
    }
}
