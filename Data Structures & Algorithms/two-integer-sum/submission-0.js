class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
   twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let base = nums[i];
        for (let j = 0; j < i; j++) {
            if ((base + nums[j]) == target) {
                return [i, j]
            }
        }
    }

};
}
