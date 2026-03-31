class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // have variable for max value, assign the first water to max
        // lowest = Math.min(height[left], height[right]) -> water = lowest * (right-left)
        // compare each iteration of water to max.
        // if (water < max) move shorter pointer 
        // when l>=r, return max

        let max = 0
        let left = 0
        let right = heights.length - 1;

        while (left < right) {
            if (heights[left] === 0) left++
            if (heights[right] === 0) right--
            let lowest = Math.min(heights[left], heights[right])
            let water = lowest * (right - left)
            max = Math.max(water, max)

            if (lowest === heights[right]) {
                right--
            } else if (lowest === heights[left]) {
                left++
            }

        }
        console.log(`left height is ${heights[left]}, right height is ${heights[right]}`)
        return max;
    }
}
