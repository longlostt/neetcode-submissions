class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a, b) => a - b);
        let output = [];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == nums[i - 1]) continue;
            let l = i + 1;
            let r = nums.length - 1
            while (l < r) {
                let sum = nums[l] + nums[r] + nums[i];
                if (sum < 0) {
                    l++;
                } else if (sum > 0) {
                    r--;
                } else {
                    output.push([nums[l], nums[r], nums[i]]);
                    while (nums[l] == nums[l + 1]) {
                        l++;
                    }
                    while (nums[r] == nums[r - 1]) {
                        r--;
                    }
                    l++;
                    r--;
                }
            }
        }
        return output;
    }
}
