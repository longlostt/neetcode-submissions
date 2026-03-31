class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let maxReach = 0;
        for(let i = 0; i < nums.length; i++){
            if(i <= maxReach){
                maxReach = Math.max(maxReach, i + nums[i]);
            } else {
                return false;
            }
        }
        return true;
    }
}
