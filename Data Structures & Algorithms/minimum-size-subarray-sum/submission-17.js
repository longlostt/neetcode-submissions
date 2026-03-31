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
            curL = right-left+1;
            while(sum >= target){
                minL = Math.min(curL, minL)
                sum = sum - nums[left];
                left++;
                curL = right-left+1;
            }
            console.log(`sum: ${sum}, minL: ${minL}`)
            
        }
        return minL == Infinity ?  0 : minL;
    }
}
