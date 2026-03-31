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
     * @return {TreeNode}
     */
    invertTree(root) {
        function dfsRevert(root){
            if (!root) return;

            let temp = root.right;
            root.right = root.left;
            root.left = temp;
            
            dfsRevert(root.left)
            dfsRevert(root.right)
        }
        dfsRevert(root)

        return root;
    }
}
