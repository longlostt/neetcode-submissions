class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let cache = new Map();
        function dp(i) {
            if (cache.has(i)) return cache.get(i);
            if (i > nums.length - 1) {
                cache.set(i, false);
                return false;
            }
            if (i == nums.length - 1){
                cache.set(i, true);
                return true;
            }
            for (let k = 1; k <= nums[i]; k++) {
                let jump = dp(i + k);
                if (jump) {
                    return true;
                }
            }
            return false;
        }
        return dp(0);
    }
}
