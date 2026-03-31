class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a,b) => a - b);
        let res = [];
        for(let i = 0; i < nums.length; i++){
            if(nums[i] == nums[i-1]) continue;
            let l = i+1;
            let r = nums.length - 1;
            while(l<r){


                if((nums[l] + nums[r] + nums[i]) < 0){
                    l++
                } else if ((nums[l] + nums[r] + nums[i]) > 0){
                    r--;
                } else {
                    res.push([nums[l], nums[r], nums[i]]);
                    // l++;
                    // r--;
                    while(nums[l] === nums[l+1]) l++; l++;
                    while(nums[r] === nums[r-1]) r--; r--;
                }
            }
        }
        return res;
    }
}
