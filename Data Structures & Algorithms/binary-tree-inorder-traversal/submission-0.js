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
    inorderTraversal(root) {
        let res = [];

        function inorderDfs(root){
            if(!root) return;
            inorderDfs(root.left);
            res.push(root.val);
            inorderDfs(root.right);
        }
        inorderDfs(root)
        return res;
    }
}
