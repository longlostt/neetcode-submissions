/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * }
 */
class Solution {
    /**
     * @param {Node} p
     * @param {Node} q
     * @return {Node}
     */
    constructor(){
        this.set = new Set();
    }

    dfs(node){
        if(!node) return node;

        if(this.set.has(node.val)) return node;
        this.set.add(node.val);

        return this.dfs(node.parent);
    }

    lowestCommonAncestor(p, q) {
        let pUp = this.dfs(p);
        let qUp = this.dfs(q);

        if(!pUp) return qUp;
        if(!qUp) return pUp;
        return qUp;

    }
}
