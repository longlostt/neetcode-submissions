class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let i = m - 1; // last real nums1 value
        let j = n - 1; // last nums2 value
        let k = m + n - 1; // last nums1 slot

        while(j >= 0){
            if(i >= 0){
                if(nums1[i] >= nums2[j]){
                    nums1[k] = nums1[i];
                    i--;
                } else {
                    nums1[k] = nums2[j];
                    j--;
                }
                k--;
            } else {
                nums1[k] = nums2[j];
                j--;
                k--;
            }
        }
        

    }
}
