class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        while(left <= right){
            let middle = Math.ceil((left+right)/2);
            if(nums[middle] < target){
                left = middle + 1;
            } else if (nums[middle] >= target){
                right = middle - 1;
            } else if (target == nums[middle]){
                return middle;
            }

        }
            return left 
    }
}
