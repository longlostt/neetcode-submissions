class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    longestOnes(nums, k) {
        let zCnt = 0;
        let l = 0;
        let max = 0;
        for (let r = 0; r < nums.length; r++) {
            if (nums[r] == 0) {
                if (zCnt >= k) {
                    while (nums[l] !== 0) {
                        l++;
                    }
                    l++;
                } else {
                    zCnt++;
                }
            }
            max = Math.max(max, r - l + 1);
        }
        return max;
    }
}
