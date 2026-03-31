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
     * @return {boolean}
     */
    isBalanced(root) {
        if(!root) return true;
        function dfs(root){
            if (!root) return 0;
            let leftDepth = dfs(root.left)
            if (leftDepth === -1) return -1;
            let rightDepth = dfs(root.right)
            if (rightDepth === -1) return -1;
            if((Math.max(leftDepth, rightDepth) - Math.min(leftDepth, rightDepth)) > 1) return -1;
            return 1 + Math.max(leftDepth, rightDepth);
        }
        if(dfs(root) === -1) return false;
        return true;
    }
}
