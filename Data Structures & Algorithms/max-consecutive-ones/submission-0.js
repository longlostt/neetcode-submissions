class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let max = 0;
        let local = 0;
        for (let num of nums) {
            if (num == 0) {
                max = Math.max(max, local);
                local = 0;
            } else {
                local++;
            }
        }
        max = Math.max(max, local);

        return max;
    }
}
