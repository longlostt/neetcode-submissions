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
    diameterOfBinaryTree(root) {
        let diameter = 0;
        function dfs(root){
            if(!root) return 0;
            let leftDepth = dfs(root.left);
            let rightDepth = dfs(root.right);
            diameter = Math.max(diameter, (leftDepth + rightDepth));
            return 1 + Math.max(leftDepth, rightDepth);
        }
        dfs(root)
        return diameter
    }
}
