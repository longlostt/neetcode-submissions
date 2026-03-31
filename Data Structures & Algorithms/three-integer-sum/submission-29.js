class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a,b) => a - b )
        console.log(nums)
        let target = 0;
        let result = [];
        for(let i = 0; i < nums.length-1; i++){
            if(nums[i] === nums[i-1]) continue
            console.log(result)
            let left = i+1;
            let right = nums.length - 1;
            while(left < right){
                let sum = nums[left] + nums[right] + nums[i];
                if (sum < target){
                    left++;
                } else if (sum > target){
                    right--;
                } else {
                    result.push([nums[i], nums[left], nums[right]])
                    while(nums[left] === nums[left+1]) left++; left++
                    while(nums[right] === nums[right-1]) right--; right--   
                }
            }
        }
        return result
    }
}
