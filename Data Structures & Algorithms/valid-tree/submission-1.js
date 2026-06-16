class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        let visited = new Array(n).fill(false);
        let adj = new Map();
        let valid = true;

        function dfs(val, prev){
            visited[val] = true;
            for(let newVal of adj.get(val)){
                if(visited[newVal] == true){
                    if(newVal != prev) valid = false;
                } else {
                    dfs(newVal, val);
                }
            }
        }

        for (let i = 0; i < n; i++) {
            adj.set(i, []);
        }
        for (const [key, val] of edges) {
            adj.get(key).push(val);
            adj.get(val).push(key);
        }
        dfs(0, undefined);
        
        return valid == true && !visited.includes(false) ? true : false
    }
}
