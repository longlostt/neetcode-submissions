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
        let newNode = new TreeNode(val)
        if (!root) return newNode;
        function dfsTraverse(root) {
            if (!root) return newNode;
            if (val < root.val) {
                if (root.left) { 
                    dfsTraverse(root.left); 
                } else {
                    root.left = newNode;
                }
            }
            else if (val > root.val) {
                if (root.right) { 
                    dfsTraverse(root.right); 
                } else {
                    root.right = newNode;
                }
            }
        }
        dfsTraverse(root, val)
        return root;
    }
}
