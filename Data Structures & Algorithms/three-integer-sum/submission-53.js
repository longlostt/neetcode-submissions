class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a - b);
        let ans = [];

        for(let i = 0; i < nums.length-1; i++){
            if(i > 0 && nums[i] == nums[i-1]) continue; // continous advancement for outer loop
            let l = i + 1;
            let r = nums.length-1;
            while(l < r){
                let sum = nums[l] + nums[r] + nums[i];
                if(sum < 0){
                    l++;
                } else if (sum > 0){
                    r--;
                } else {
                    ans.push([nums[l], nums[r], nums[i]]);
                    l++; // default advancement, after finding proper triplet, for inner loop
                    r--;
                    while(l > 0 && nums[l] == nums[l-1]) l++; // continous advancement for inner loop
                    while(r < nums.length-1 && nums[r] == nums[r+1]) r--;
                }

            }
        }

        return ans;
        
    }
}
