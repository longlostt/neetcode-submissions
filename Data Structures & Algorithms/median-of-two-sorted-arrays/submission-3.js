class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let res = [];
        let i = 0;
        let j = 0;
        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] <= nums2[j]) {
                res.push(nums1[i++]);
            } else {
                res.push(nums2[j++]);
            }
        }

        while(i < nums1.length) res.push(nums1[i++]);
        while(j < nums2.length) res.push(nums2[j++]);

        console.log(res)

        if(res.length % 2 == 0){ // even
            let sum = (res[(res.length / 2) - 1] + res[(res.length / 2)]) / 2;
            return sum;
        } else { // odd
            return res[Math.floor(res.length / 2)]
        }

    }
}
