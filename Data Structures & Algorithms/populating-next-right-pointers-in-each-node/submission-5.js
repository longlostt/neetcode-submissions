/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, left = null, right = null, next = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} root
     * @return {Node}
     */
    connect(root) {
        function dfs(root) {
            if (!root) return;
            if (root.left && root.right) {
                root.left.next = root.right;
                if (root.next) {
                    root.right.next = root.next.left;
                }
            } 
            dfs(root.left);
            dfs(root.right);
        }
        dfs(root);
        return root;
    }
}
