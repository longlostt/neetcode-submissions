class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length == 1) return nums[0];

        let firstHouse = nums.slice(0, nums.length - 1);
        let lastHouse = nums.slice(1);

        let cache = new Map(); // idx -> maxVal
        function dp(houses, idx) {
            if (cache.has(idx)) return cache.get(idx);
            if (idx >= houses.length) return 0;
            let rob = houses[idx] + dp(houses, idx + 2);
            let skip = dp(houses, idx + 1);
            cache.set(idx, Math.max(rob, skip));
            return cache.get(idx);
        }

        let leftCall = dp(firstHouse, 0);
        cache.clear();
        let rightCall = dp(lastHouse, 0);
        return Math.max(leftCall, rightCall);
    }
}
