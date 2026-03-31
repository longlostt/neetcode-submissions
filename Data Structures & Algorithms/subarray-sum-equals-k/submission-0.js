class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let prefixSum = new Map()
        let sum = 0;
        let count = 0;
        prefixSum.set(0, 1)
        for(let i = 0; i < nums.length; i++){
            sum += nums[i] 
            if(prefixSum.get((sum-k)) && prefixSum.keys()){
                count += prefixSum.get(sum - k)
            }
            prefixSum.set(sum, (prefixSum.get(sum) || 0 ) + 1)
            
        }
        console.log(prefixSum)
        return count
    }
}
