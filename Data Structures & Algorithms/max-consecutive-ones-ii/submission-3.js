class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let l = 0;
        let max = 0;
        let zeroCnt = 0;
        for (let r = 0; r < nums.length; r++) {
            if (nums[r] == 0) {
                zeroCnt++;
            }
            while(zeroCnt > 1){
                if(nums[l] == 0){
                    zeroCnt--;
                }
                l++;
            }

            max = Math.max(max, r - l + 1);
        }
        return max;
    }
}
