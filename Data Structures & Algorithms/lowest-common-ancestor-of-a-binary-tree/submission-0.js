/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    dfs(root, p, q) {
        if (root == p) return p;
        if (root == q) return q;
        if (!root) return;

        let leftSearch = this.dfs(root.left, p, q);
        let rightSearch = this.dfs(root.right, p, q);

        if (rightSearch && leftSearch) return root;
        if (!rightSearch && leftSearch) return leftSearch;
        if (rightSearch && !leftSearch) return rightSearch;
    }
    
    lowestCommonAncestor(root, p, q) {
        return this.dfs(root, p, q);
    }
}
