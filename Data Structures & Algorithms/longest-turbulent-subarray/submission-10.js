class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {
        let l = 0;
        let r = 1;
        let sign = ""; // 'g' or 'l'
        let max = 1;
        while (r < arr.length) {
            if (arr[r] > arr[r - 1]) {
                if (sign == "g") {
                    l = r-1;
                }
                sign = "g";
            } else if (arr[r] < arr[r - 1]) {
                if (sign == "l") {
                    l = r-1;
                }
                sign = "l";
            } else {
                l = r;
            }
            max = Math.max(max, r - l + 1);
            r++;
        }
        return max;
    }
}
