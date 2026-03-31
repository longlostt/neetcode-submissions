class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let left = 0;
        let seen = new Set();

        for(let right = 0; right<nums.length; right++){
            if(Math.abs(right-left) > k){
                seen.delete(nums[left]);
                left++;
            }
            if(seen.has(nums[right])){
                return true;
            }
            seen.add(nums[right])
        }
        return false;

    }
}
