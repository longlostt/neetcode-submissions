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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        function helper(preStart, preEnd, inStart, inEnd){
            if(preStart > preEnd) return null;
            let val = preorder[preStart];
            let root = new TreeNode(val);
            let split = inorder.indexOf(val);
            let leftSize = split - inStart;
            let rightSize = inEnd - leftSize;
            root.left = helper(preStart+1, preStart+leftSize, inStart, split-1);
            root.right = helper(preStart+leftSize+1, preEnd, split+1, inEnd);
            return root;
        }

        return helper(0, preorder.length-1, 0, inorder.length-1);
    }
}
