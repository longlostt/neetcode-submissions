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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if (!root) return "";
        if (!root.left && !root.right) return `${root.val},`;

        let data = "";

        let q = [root];

        while (q.length > 0) {
            let node = q.shift();
            if (!node) {
                data += "null,";
                continue;
            }
            data += node.val.toString() + ",";
            q.push(node.left);
            q.push(node.right);
        }

        return data; // "1,2,3,null,null,null,null"
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let arr = data.split(","); // [1,2,3,null,null,null,null]
        if(arr.length == 0) return [];

        let root = new TreeNode(arr[0]);
        let q = [root];
        let i = 1;

        while(q.length > 0){
            let node = q.shift();
            let left = null;
            let right = null;
            if(arr[i]){
                left = new TreeNode(arr[i])
                q.push(left)
            }
            if(arr[i+1]){
                right = new TreeNode(arr[i+1])
                q.push(right);
            }
            node.left = left;
            node.right = right;
            i+=2;
        }
    
        return root;
    }
}
