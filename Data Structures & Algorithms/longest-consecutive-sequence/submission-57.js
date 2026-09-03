class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let seen = new Set(nums);
        let max = 0;
        for(let i = 0; i < nums.length; i++){
            if(!seen.has(nums[i] - 1)){
                let cur = nums[i];
                let cnt = 1;
                while(seen.has(cur+1)){
                    cur++;
                    cnt++;
                }
                max = Math.max(cnt, max);
            }
        }
        return max;
    }
}
