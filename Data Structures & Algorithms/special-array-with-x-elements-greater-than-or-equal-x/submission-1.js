class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    specialArray(nums) {
        for(let i = 1; i <= Math.max(...nums); i++){
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
