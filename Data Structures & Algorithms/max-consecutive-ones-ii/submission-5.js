class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let zCnt = 0;
        let l = 0;
        let max = 0;
        for(let r = 0; r<nums.length; r++){
            if(nums[r] == 0){
                if(zCnt >= 1){
                    while(nums[l] !== 0){
                        l++;
                    }
                    l++;
                } else {
                    zCnt++;
                }
            } 
            max = Math.max(max, r-l+1);
        }
        return max;
    }
}
