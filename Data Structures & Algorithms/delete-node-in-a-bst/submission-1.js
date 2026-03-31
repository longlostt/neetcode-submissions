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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        if (!root) return root;

        if (root.val > key) {
            root.left = this.deleteNode(root.left, key)
        } else if (root.val < key) {
            root.right = this.deleteNode(root.right, key)
        } else {
            if (!root.left) { // leaf case
                return root.right;
            }
            else if (!root.right) { // one child
                return root.left;
            } else {
                // two children
                let rightRoot = root.right;
                while (rightRoot.left) {
                    rightRoot = rightRoot.left;
                }
                root.val = rightRoot.val;
                root.right = this.deleteNode(root.right, rightRoot.val)
            }
        }
        return root;
    }
}
