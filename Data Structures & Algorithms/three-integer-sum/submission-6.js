class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a-b)
        let left = 0;
        let right = nums.length - 1;
        let returnArr = []

        for (let i = 0; i < nums.length-1; i++) {
            left = i+1
            right = nums.length - 1
            if(nums[i]>0) break;
            if(i>0&&nums[i] === nums[i-1]) continue;

            while (left < right) {
                let sum = nums[i] + nums[left] + nums[right];
                if (sum === 0) {
                    returnArr.push([nums[i], nums[left], nums[right]])
                    left++
                    right--
                    while(nums[left]===nums[left-1]) left++
                }
                else if (sum < 0) {
                    left++
                }
                else if (sum > 0) {
                    right--
                }
            }
        }
        return returnArr;
    }
}
