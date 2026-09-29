class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let cache = new Map() // idx -> maxVal
        function dp(idx){
            if(cache.has(idx)) return cache.get(idx);
            if(idx >= nums.length) return 0;  
            // if(idx == nums.length - 1) return nums[idx];  
            let rob = nums[idx] + dp(idx+2);
            let skip = dp(idx+1);
            cache.set(idx, Math.max(rob,skip));
            return cache.get(idx);
        }
        return dp(0);
    }
}
