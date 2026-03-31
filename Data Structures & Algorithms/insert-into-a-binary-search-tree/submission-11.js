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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        let newNode = new TreeNode(val);
        function dfsTraverse(root) {
            if (!root) return newNode;
            if (val < root.val) {
                root.left = dfsTraverse(root.left);
            }
            else if (val > root.val) {
                root.right = dfsTraverse(root.right);
            }
            return root;
        }
        return dfsTraverse(root)
    }
}
