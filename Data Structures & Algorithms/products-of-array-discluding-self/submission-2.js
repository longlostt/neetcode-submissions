class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let leftToRight = new Array(nums.length).fill(1)
        let rightToLeft = new Array(nums.length).fill(1)
        let output = [];
        let product = 1;

        for(let i = 0; i < nums.length; i++){
            leftToRight[i] = product;
            product *= nums[i];
        }
        product = 1;
        for(let i = nums.length-1; i >= 0; i--){
            rightToLeft[i] = product;
            product *= nums[i];
        }

        console.log(leftToRight, rightToLeft)
        for(let i = 0; i < nums.length; i++){
            output.push(leftToRight[i] * rightToLeft[i]);
        }
        return output

    }
}
