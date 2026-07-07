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
        if (!root) return null;
        let res = root;
        let q = [root];
        while (q.length > 0) {
            let len = q.length;
            for (let i = 0; i < len; i++) {
                let val = q.shift();
                if (i < len - 1) {
                    val.next = q[0];
                }
                if (val.left) q.push(val.left);
                if (val.right) q.push(val.right);
            }
        }
        return res;
    }
}
