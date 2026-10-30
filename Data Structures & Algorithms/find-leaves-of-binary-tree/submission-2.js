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
     * @return {number[][]}
     */
    findLeaves(root) {
        let ans = [];
        const calcHeight = (root) => {
            if(!root) return -1;

            let leftHeight = calcHeight(root.left);
            let rightHeight = calcHeight(root.right);
            let curHeight = Math.max(leftHeight, rightHeight) + 1;

            if(ans.length == curHeight) ans.push([]);
            ans[curHeight].push(root.val);
            return curHeight;

        };
        calcHeight(root);
        return ans;
    }
}
