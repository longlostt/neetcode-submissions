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
    isValidBST(root) {
        let isValid = true;
        // function validate(root){
        //     if (!root || !root.left || !root.right) return;
        //     if(root.left.val >= root.val || root.right.val <= root.val){
        //         isValid = false;
        //     }
        //     validate(root.left);
        //     validate(root.right);
        // }

        function slidingW(root, l, r){
            if (!root) return true;
            if(l >= root.val || r <= root.val){
                return false; 
            }
            return slidingW(root.left, l, root.val) && slidingW(root.right, root.val, r);
        }
        return slidingW(root, -Infinity, Infinity)
    }
}
