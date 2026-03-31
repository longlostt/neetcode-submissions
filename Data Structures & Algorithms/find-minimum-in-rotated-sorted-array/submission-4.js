class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;
        let mid;
        while (left < right){
            mid = Math.floor((left+right) / 2);
            if(nums[right] < nums[mid]){
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return nums[left];
            
    }
}
