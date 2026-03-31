class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftWall = [];
        let rightWall = [];
        let max = -Infinity;
        let ans = 0;
        for (let i = 0; i < height.length; i++) {
            if(height[i] > max){
                max = height[i];
            }
            leftWall.push(max);
        }
        max = -Infinity;
        for(let j = height.length - 1; j >= 0; j--){
            if(height[j] > max){
                max = height[j];
            }
            rightWall.push(max);
        }
        // rightWall.reverse()
        for(let k = 0; k < height.length; k++){
            let curWater = (Math.min(leftWall[k], rightWall[height.length-k-1])) - height[k];
            ans+=curWater
        }

        return ans;

    }
}
