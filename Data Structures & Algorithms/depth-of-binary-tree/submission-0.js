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
     * @return {number}
     */
    maxDepth(root) {
        function recursion(root){
            if(!root) return 0;
            let leftDepth = recursion(root.left);
            let rightDepth = recursion(root.right);
            return 1 + Math.max(leftDepth, rightDepth)
        }
        return recursion(root);
    }
}
