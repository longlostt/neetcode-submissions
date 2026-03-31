class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let setNums = new Set(nums);
        let max = 0;
        for(let i=0; i<nums.length; i++){
            if(!setNums.has(nums[i]-1)){
                // possible start is found, do logic here.
                let curCount = 1;
                let curVal = nums[i] // 2
                while (setNums.has(curVal+1)){ // 3
                    curVal += 1; 
                    curCount += 1;
                }
                max = Math.max(max, curCount)
            } else {
                continue;
            }
        }
        return max;
    }
}
