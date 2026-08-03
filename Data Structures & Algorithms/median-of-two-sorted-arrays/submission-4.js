class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    getKthSmallest(arr1, arr2, k) {
        if (arr2.length < arr1.length) {
            return this.getKthSmallest(arr2, arr1, k);
        }

        if (arr1.length == 0) {
            return arr2[k - 1];
        }

        if (k == 1) {
            return Math.min(arr1[0], arr2[0]);
        }

        let cut1 = Math.min(arr1.length, Math.floor(k / 2));
        let cut2 = Math.min(arr2.length, Math.floor(k / 2));

        if (arr1[cut1 - 1] > arr2[cut2 - 1]) {
            return this.getKthSmallest(arr1, arr2.slice(cut2), k - cut2);
        } else {
            return this.getKthSmallest(arr1.slice(cut1), arr2, k - cut1);
        }
    }

    findMedianSortedArrays(nums1, nums2) {
        let k = Math.floor((nums1.length + nums2.length) / 2);
        let n = nums1.length + nums2.length;
        if (n % 2 == 0) {
            return (
                (this.getKthSmallest(nums1, nums2, k + 1) + this.getKthSmallest(nums1, nums2, k)) / 2);
        } else {
            return this.getKthSmallest(nums1, nums2, k+1);
        }
    }
}
