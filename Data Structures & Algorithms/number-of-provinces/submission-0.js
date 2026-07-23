class Union_Find {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, index) => index);
        this.size = new Array(n).fill(1);
        this.cnt = n;
    }

    find(node) {
        if(node != this.parent[node]){
            this.parent[node] = this.find(this.parent[node]);
        }
        return this.parent[node];
    }

    union(u, v){
        let rootU = this.find(u);
        let rootV = this.find(v);

        if(rootU == rootV) return false;

        let sizeU = this.size[rootU];
        let sizeV = this.size[rootV];

        if(sizeU > sizeV){
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
     * @param {number[][]} isConnected
     * @return {number}
     */
    findCircleNum(isConnected) {
        let dsu = new Union_Find(isConnected.length);

        for(let i = 0; i < isConnected.length; i++){
            for(let j = 0; j < i; j++){
                if(isConnected[i][j] == 1) dsu.union(i, j);
            }
        }

        return dsu.numOfRoots();
    }
}
