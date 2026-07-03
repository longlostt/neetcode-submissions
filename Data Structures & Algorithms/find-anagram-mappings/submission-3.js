class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    anagramMappings(nums1, nums2) {
        let mapping = new Array(nums1.length);
        let map = new Map(); // val -> idx

        for (let i = 0; i < nums1.length; i++) {
            if (!map.has(nums1[i])) {
                map.set(nums1[i], []);
            }
            map.get(nums1[i]).push(i);
        }
        console.log(map);

        for (let j = 0; j < nums2.length; j++) {
            let mapIdxes = map.get(nums2[j]);
            for (let id of mapIdxes) {
                mapping[id] = j;
            }
        }

        return mapping;
    }
}
