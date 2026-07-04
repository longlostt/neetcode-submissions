class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let nums3 = [];
        nums3.push(...nums1, ...nums2);
        nums3.sort((a, b) => a - b);

        console.log(nums3)
        if (nums3.length % 2 !== 0) {
            return nums3[Math.floor(nums3.length / 2)];
        } else {
            let l = nums3[Math.floor((nums3.length-1) / 2)];
            let r = nums3[Math.ceil((nums3.length-1) / 2)];
            console.log(l,r)
            return ((l+r) / 2)
        }
    }
}
