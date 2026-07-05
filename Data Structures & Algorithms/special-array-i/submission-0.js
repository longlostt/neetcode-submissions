class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isArraySpecial(nums) {
        if (nums.length == 1) return true;
        let j = 0;  
        for (let i = 1; i < nums.length; i++) {
            if (
                (nums[i] % 2 == 0 && nums[j] % 2 == 0) ||
                (nums[i] % 2 !== 0 && nums[j] % 2 !== 0)
            ) {
                return false;
            }
            j++;
        }
        return true;
    }
}
