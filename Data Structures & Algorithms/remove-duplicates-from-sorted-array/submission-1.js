class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let i = 1;
        while(i < nums.length){
            if(nums[i-1] == nums[i]){
                let prev = i-1;
                nums.splice(i,1);
                i = prev;
            }
            i++;
        }
        return nums.length;
    }
}
