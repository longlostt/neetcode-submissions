class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    specialArray(nums) {
        for(let i = 0; i <= nums.length; i++){
            let x = i;
            let cnt = 0;
            for(let num of nums){
                if(num >= i) cnt++
            }
            if(cnt == x) return x;
        }
        return -1;
    }
}
