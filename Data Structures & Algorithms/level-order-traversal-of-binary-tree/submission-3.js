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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];

        let q = [];
        let res = [];
        let curLevel = 0;

        q.push(root);

        while(q.length > 0){
            res.push([])
            let len = q.length;
            
            for(let i = 0; i < len; i++){
                let node = q.shift();

                res[curLevel].push(node.val);

                if(node.left) q.push(node.left);
                if(node.right) q.push(node.right);
            }
            curLevel++;
        }
        return res;
    }
}
