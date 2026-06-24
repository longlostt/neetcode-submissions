class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    specialArray(nums) {
        nums = nums.sort((a,b) => a - b);

        for(let i = 0; i <= nums.length; i++){
            let min = 0;
            let max = nums.length-1;
            let start = nums.length;
            while(min <= max){
                let mid = Math.floor((max + min) / 2);
                if(nums[mid] < i){
                    min = mid + 1;
                } else if (nums[mid] >= i){
                    start = mid;
                    max = mid - 1;
                }
                
            }
            if(nums.length - start == i) return i;

        }
        return -1;
    }
}
