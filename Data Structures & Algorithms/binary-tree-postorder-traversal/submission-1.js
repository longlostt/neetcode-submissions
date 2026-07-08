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
    postorderTraversal(root) {
        let arr = [];

        function postDfs(root){
            if (!root) return;
            postDfs(root.left)
            postDfs(root.right)
            arr.push(root.val);
        }
        postDfs(root)
        return arr;
    }
}
