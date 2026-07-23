class UnionFind {
    /**
     * @param {number} n
     */
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, index) => index);
        this.size = new Array(n).fill(1);
        this.cnt = n;
    }

    /**
     * @param {number} x
     * @return {number}
     */
    find(x) {
        let cur = this.parent[x];
        while (cur !== this.parent[cur]) {
            // if points to itself, then it's root
            cur = this.parent[cur];
        }
        return cur;
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    isSameComponent(x, y) {
        return this.find(x) == this.find(y);
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);

        if (rootX == rootY) return false;
    
        let sizeX = this.size[rootX];
        let sizeY = this.size[rootY];
        if (sizeX > sizeY) {
            this.parent[rootY] = rootX;
            this.size[rootX] += this.size[rootY];
        } else {
            this.parent[rootX] = rootY;
            this.size[rootY] += this.size[rootX];
        }
        this.cnt -= 1;
        return true;
    }

    /**
     * @return {number}
     */
    getNumComponents() {
        return this.cnt;
    }
}
