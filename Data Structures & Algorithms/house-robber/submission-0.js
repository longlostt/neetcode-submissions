class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let cache = new Map();
        function dp(i){
            if(cache.get(i)) return cache.get(i);
            if(i >= nums.length) return 0;

            let skip = dp(i+1);
            let rob = nums[i] + dp(i+2);
            let srMax = Math.max(skip, rob);
            cache.set(i, Math.max(skip, rob))
            return srMax;
        }
        return dp(0);
    }
}
