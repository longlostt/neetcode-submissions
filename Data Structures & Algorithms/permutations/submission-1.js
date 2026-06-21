class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        // if (nums.length == 0) return [[]];
        let res = [];
        function build(perm, used) {
            if (perm.length == nums.length) {
                res.push([...perm]);
                return;
            }
            for (let num of nums) {
                if (!used.has(num)) {
                    used.add(num);
                    perm.push(num);
                    build(perm, used);
                    used.delete(num);
                    perm.pop();
                }
            }
        }
        build([], new Set());
        return res;
    }
}
