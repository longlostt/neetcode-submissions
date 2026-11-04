class RandomizedSet {
    constructor() {
        this.idx = 0;
        this.arrIdxToVal = [];
        this.mapValToIdx = new Map();
    }

    /**
     * @param {number} val
     * @return {boolean}
     */
    insert(val) {
        if (this.mapValToIdx.has(val)) return false;
        else {
            this.mapValToIdx.set(val, this.idx);
            this.arrIdxToVal[this.idx] = val;
            this.idx++;
            return true;
        }
    }

    /**
     * @param {number} val
     * @return {boolean}
     */
    remove(val) {
        if (!this.mapValToIdx.has(val)) return false;
        else {
            let curIdx = this.mapValToIdx.get(val);
            let lastVal = this.arrIdxToVal[this.idx - 1];

            this.arrIdxToVal[curIdx] = lastVal;
            this.arrIdxToVal.pop(); // remove after overwriting the deleted val (prevent dupe)

            this.mapValToIdx.set(lastVal, curIdx); // sync with other map
            this.mapValToIdx.delete(val); // finally, delete the val
            this.idx--; // decrement since its one less value
            return true;
        }
    }

    /**
     * @return {number}
     */
    getRandom() {
        let rand = Math.floor(Math.random() * this.arrIdxToVal.length);
        return this.arrIdxToVal[rand];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
