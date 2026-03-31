class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let index = 0;
        let ans = []
        while (index !== 2){
            for(let num of nums){
                ans.push(num)
            }
            index++
        }
        return ans
    }
}
