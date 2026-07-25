class Union_Find{
    constructor(n){
        this.parent = Array.from({length: n + 1},(_, index) => index);
        this.size = new Array(n).fill(1);
        this.cnt = n;
    }

    find(u){
        if(u !== this.parent[u]){
            this.parent[u] = this.find(this.parent[u]);
        }
        return this.parent[u];
    }

    union(u, v){
        let rootU = this.find(u);
        let rootV = this.find(v);

        if(rootU == rootV) return false;

        if(this.size[rootU] > this.size[rootV]){
            this.parent[rootV] = rootU;
            this.size[rootU] += this.size[rootV];
        } else {
            this.parent[rootU] = rootV;
            this.size[rootV] += this.size[rootU];
        }
        this.cnt--; 
        return true;
    }

    numOfRoots(){
        return this.cnt;
    }


}

class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        let dsu = new Union_Find(edges.length);
        
        for(let edge of edges){
            if(!dsu.union(edge[0], edge[1])) return edge;
        }
    }
}
