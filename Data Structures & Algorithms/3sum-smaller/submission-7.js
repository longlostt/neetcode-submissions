class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    threeSumSmaller(nums, target) {
        // if(nums.length < 3) return 0;
        nums = nums.sort((a,b) => a - b);
        let cnt = 0;
        for(let i = 0; i < nums.length; i++){
            let l = i + 1;
            let r = nums.length-1;
            while(l < r){
                let sum = nums[i] + nums[l] + nums[r];
                if(sum < target){
                    cnt += r-l;
                    l++;
                } else{
                    r--;
                } 
            }
        }
        return cnt;
    }
}
