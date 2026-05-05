class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let i = 1;
        let len = nums.length;
        while(i < len){
            if(nums[i-1] == nums[i]){
                let prev = i-1;
                nums.splice(i,1);
                i = prev;
                len = nums.length;
            }
            i++;
        }
        return nums.length;
    }
}
