class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length -1;
        let mid;
        while (left <= right){
            mid = Math.ceil((left+right) / 2);
            if (nums[mid] === target) return mid;
            if(nums[left] <= nums[mid]){ // left subarray is sorted
                if(nums[left] <= target && target <= nums[mid]){ // is target in this subarray?
                    right = mid - 1; // if so, reduce the window
                } else {
                    left = mid + 1; // if not, must be the other sorted subarray
                }
            } else { // right subarray is sorted
                 if(nums[mid] <= target && target <= nums[right]){ // is target in this subarray?
                    left = mid + 1; // if so, reduce the window
                } else {
                    right = mid - 1; // if not, must be the other sorted subarray              
                }
            }
        }
        return -1;
    }
}
