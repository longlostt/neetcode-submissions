class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let sumMap = new Map();
        let cnt = 0;
        let sum = 0;
        sumMap.set(0, 1)
        for (let num of nums) {
            sum += num;
            if (sumMap.has(sum - k)) {
                cnt += sumMap.get(sum - k);
            }
            sumMap.set(sum, (sumMap.get(sum) || 0) + 1)
        }
        return cnt;
    }
}
