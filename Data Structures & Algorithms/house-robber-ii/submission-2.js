class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length == 1) return nums[0];
        
        let nums1 = Array.from(nums);
        nums1.shift();
        let nums2 = Array.from(nums);
        nums2.pop();

        function house(arr) {
            if(arr.length == 0) return 0;
            if(arr.length == 1) return arr[0];
            let maxSoFar = [];
            maxSoFar.push(arr[0])
            maxSoFar.push(Math.max(arr[0], arr[1]))
            let max = maxSoFar[1];
            for(let i = 2; i < arr.length; i++){
                max = Math.max(maxSoFar[i-1], maxSoFar[i-2] + arr[i]);
                maxSoFar.push(max);
            }
            return max;
        }

        return Math.max(house(nums1), house(nums2));
    }
}
