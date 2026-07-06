class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @return {number[]}
     */
    findMinHeightTrees(n, edges) {
        // topo sort's ugly brother 3/10

        if(edges.length == 0) return [0];
        let degree = new Map();
        let adj = new Map();
        for (const [key, value] of edges) {
            degree.set(key, (degree.get(key) || 0) + 1);
            degree.set(value, (degree.get(value) || 0) + 1);

            if (!adj.has(key)) adj.set(key, []);
            if (!adj.has(value)) adj.set(value, []);
            adj.get(key).push(value);
            adj.get(value).push(key);
        }

        let q = [];
        for (let i = 0; i < n; i++) {
            if (degree.get(i) == 1) q.push(i);
        }

        while (n > 2) {
            let layerSize = q.length;
            n -= layerSize;
            for (let i = 0; i < layerSize; i++) {
                let leaf = q.shift();
                for (let val of adj.get(leaf)) {
                    degree.set(val, degree.get(val) - 1);
                    if(degree.get(val) == 1){
                        q.push(val);
                    }
                }
            }
        }
        return q
    }
}
