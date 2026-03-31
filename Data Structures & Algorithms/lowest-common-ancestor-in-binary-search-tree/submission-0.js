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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        // case 1: separate subtrees -> initial root is LCA
        // case 2: same subtree -> traverse, new root is new LCA
        // --> if encounter root.val == p || root.val == q, return p || q.
        
        function findLCA(root){
            if (!root) return;

            if(root.val == p.val) return p;
            if(root.val == q.val) return q;

            if (p.val < root.val && q.val < root.val){
                return findLCA(root.left)
            } else if(p.val > root.val && q.val > root.val){
                return findLCA(root.right)
            } else {
                return root;
            }
        }

        return findLCA(root)
    }
}
