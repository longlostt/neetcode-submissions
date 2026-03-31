/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) return [];
        let q = [];
        let ans = [];

        q.push(root);

        while (q.length > 0) {
            let len = q.length;
            ans.push(q[len - 1].val);
            for (let i = 0; i < len; i++) {
                let node = q.shift();
                if (node.left) q.push(node.left)
                if (node.right) q.push(node.right)
            }
        }
        return ans;
    }
}
