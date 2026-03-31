class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        let cache = new Map();
        function dp(i, total) {
            if (i >= nums.length) return total === target ? 1 : 0; 
            let add = dp(i + 1, nums[i] + total);
            let sub = dp(i + 1, total - nums[i]);
            let ways = add + sub;
            cache.set(total, ways);
            return ways;
        }
        return dp(0,0);
    }
}
