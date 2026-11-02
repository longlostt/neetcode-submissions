class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        if(nums.length == 1) return nums[0];
        let maxProduct = -Infinity;
        let curMax = nums[0];
        let curMin = nums[0];
        for(let i = 1; i < nums.length; i++){
            let tempMax = curMax;
            curMax = Math.max(nums[i], tempMax * nums[i], curMin * nums[i]);
            curMin = Math.min(nums[i], tempMax * nums[i], curMin * nums[i]);
            maxProduct = Math.max(maxProduct, curMax);
        }

        return maxProduct;
    }
}
