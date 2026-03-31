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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        function compare(root){
            if(!root) return false;

            if(root.val == subRoot.val){
                if(compareSub(root, subRoot)) return true;
            }
            return compare(root.left) || compare(root.right)
        }

        function compareSub(root, subroot){
            if (!root && !subroot) return true;
            if (!root || !subroot) return false;
            if (root.val == subroot.val){
                return compareSub(root.left, subroot.left) && compareSub(root.right, subroot.right);
            }
            return false;
        }
        return compare(root, subRoot)
    }
}
