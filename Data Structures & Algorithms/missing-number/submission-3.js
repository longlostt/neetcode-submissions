class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let sum = 0;
        for(let i = 0; i < nums.length+1; i++){
            sum += i;
        }

        for(let num of nums){
            sum -= num;
        }

        return sum;
    
    }
}
