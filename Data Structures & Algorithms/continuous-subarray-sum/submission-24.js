class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    checkSubarraySum(nums, k) {
        let sum = 0;
        let map = new Map();// remainder -> index
        map.set(nums[0] % k ,0);
        map.set(0 ,-1);
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            if (map.has(sum % k) && (i - map.get(sum % k)) >= 2) {
                return true;
            }
            if(!map.has(sum % k)) map.set(sum % k, i);
        }
        return false;
    }
}
