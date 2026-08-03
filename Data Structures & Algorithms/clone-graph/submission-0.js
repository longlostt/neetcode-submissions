/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        let visited = new Map();

        function dfs(root) {
            if (!root) return root;
            if(visited.has(root)) return visited.get(root);

            let node = new Node(root.val, []);
            visited.set(root, node);

            for (let n of root.neighbors) {
                visited.get(root).neighbors.push(dfs(n));
            }

            return visited.get(root);
        }
        return dfs(node);
    }
}
