class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let left = 0;
        let minL = Infinity;
        let sum = 0;
        let curL = 0;
        for(let right = 0; right < nums.length; right++){
            sum += nums[right];
            while(sum >= target){
                minL = Math.min(right-left+1, minL)
                sum = sum - nums[left];
                left++;
            }
            console.log(`sum: ${sum}, minL: ${minL}`)
            
        }
        return minL == Infinity ?  0 : minL;
    }
}
