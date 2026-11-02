class RandomizedSet {
    constructor() {
        this.idx = 0;
        this.mapIdxToVal = new Map();
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
            this.mapIdxToVal.set(this.idx, val);
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
            let lastIdx = this.idx-1;
            let lastVal = this.mapIdxToVal.get(lastIdx);
            this.mapIdxToVal.set(curIdx, lastVal);
            this.mapValToIdx.set(lastVal, curIdx);
            this.mapValToIdx.delete(val);
            this.mapIdxToVal.delete(lastIdx)
            this.idx--;
            return true;
        }
    }

    /**
     * @return {number}
     */
    getRandom() {
        let rand = Math.floor(Math.random() * this.mapIdxToVal.size);
        return this.mapIdxToVal.get(rand);
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
