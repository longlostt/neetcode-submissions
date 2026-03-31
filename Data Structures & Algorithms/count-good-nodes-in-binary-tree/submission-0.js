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
    goodNodes(root) {
        let cnt = 0;
        let max = root.val;
        function dfs(root, maxSoFar){
            if(!root) return;
            if(root.val >= maxSoFar) cnt++; 
            maxSoFar = Math.max(root.val, maxSoFar);
            dfs(root.left, maxSoFar);
            dfs(root.right, maxSoFar);

        }
        dfs(root, max);
        return cnt;      
    }
}
