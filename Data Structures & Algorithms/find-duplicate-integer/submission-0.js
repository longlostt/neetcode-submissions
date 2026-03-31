class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slowIndex = 0;
        let fastIndex = 0;
        let count = 0;
        while(true){
            slowIndex = nums[slowIndex]
            fastIndex = nums[nums[fastIndex]]
            if(fastIndex === slowIndex) break;
        } 
        slowIndex = 0;
        while(true){
            slowIndex = nums[slowIndex];
            fastIndex = nums[fastIndex];
            if(slowIndex === fastIndex) return slowIndex;
        }
    }
}
