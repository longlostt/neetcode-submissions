class Union_Find {
    constructor() {
        this.parent = new Map();
        this.weight = new Map();
    }

    add(x) {
        if (!this.parent.has(x)) {
            this.parent.set(x, x);
            this.weight.set(x, 1.0);
        }
    }

    find(x) {
        if (x !== this.parent.get(x)) {
            let origParent = this.parent.get(x);
            this.parent.set(x, this.find(origParent));
            this.weight.set(x, this.weight.get(x) * this.weight.get(origParent));
        }
        return this.parent.get(x);
    }

    union(x, y, val) {
        this.add(x);
        this.add(y);
        let rootX = this.find(x);
        let rootY = this.find(y);

        if (rootX == rootY) return false;

        this.parent.set(rootX, rootY);
        this.weight.set(rootX, (val * this.weight.get(y)) / this.weight.get(x));

        return true;
    }

    getRatio(x, y) {
        if (!this.parent.has(x) || !this.parent.has(y) || this.find(x) !== this.find(y)) {
            return -1.0;
        }
        return this.weight.get(x) / this.weight.get(y);
    }
}

class Solution {
    /**
     * @param {string[][]} equations
     * @param {number[]} values
     * @param {string[][]} queries
     * @return {number[]}
     */
    calcEquation(equations, values, queries) {
        let dsu = new Union_Find();
        let res = [];
        for (let i = 0; i < equations.length; i++) {
            let [x, y] = equations[i];
            let val = values[i];
            dsu.union(x, y, val);
        }

        for (let q of queries) {
            let [a, b] = q;
            res.push(dsu.getRatio(a, b));
        }

        return res;
    }
}
