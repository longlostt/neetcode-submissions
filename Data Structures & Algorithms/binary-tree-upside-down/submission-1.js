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
    _reverse(root){
        if(!root.left) return root;
        let newRoot = this._reverse(root.left);
        let leftChild = root.left;
        leftChild.left = root.right;
        leftChild.right = root;
        root.right = null;
        root.left = null;
        return newRoot;
        
    }

    upsideDownBinaryTree(root) {
        if(!root) return null;
        return this._reverse(root);
    }
}
