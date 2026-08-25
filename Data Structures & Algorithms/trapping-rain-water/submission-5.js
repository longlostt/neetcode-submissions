class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0;
        let r = height.length - 1;
        let maxLeft = height[l];
        let maxRight = height[r];
        let res = 0;
        while(l < r){
            maxLeft = Math.max(maxLeft, height[l]);
            maxRight = Math.max(maxRight, height[r]);

            if(maxLeft <= maxRight){
                res += maxLeft - height[l];
                l++;
            } else{
                res += maxRight - height[r];
                r--;
            }
        }
        return res
    }
}
