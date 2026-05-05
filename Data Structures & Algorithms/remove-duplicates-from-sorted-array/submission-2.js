class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let i = 1;
        while(i < nums.length){
            if(nums[i-1] == nums[i]){
                nums.splice(i,1);
                i = i-1;
            }
            i++;
        }
        return nums.length;
    }
}
