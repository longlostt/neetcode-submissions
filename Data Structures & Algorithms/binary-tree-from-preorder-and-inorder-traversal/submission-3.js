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
        let idxMap = new Map(
            inorder.map((item, idx) => [item, idx])
        );
        console.log(idxMap)
        function helper(preStart, preEnd, inStart, inEnd){
            if(preStart > preEnd) return null;
            let val = preorder[preStart];
            let root = new TreeNode(val);
            let split = idxMap.get(val);
            let leftSize = split - inStart;
            root.left = helper(preStart+1, preStart+leftSize, inStart, split-1);
            root.right = helper(preStart+leftSize+1, preEnd, split+1, inEnd);
            return root;
        }

        return helper(0, preorder.length-1, 0, inorder.length-1);
    }
}
