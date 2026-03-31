class RandomizedSet {
    constructor(array, valToIndex) {
        this.array = [];
        this.valToIndex = new Map;
    }

    /**
     * @param {number} val
     * @return {boolean}
     */
    insert(val) {
        if(this.valToIndex.has(val)){
            return false;
        }
        this.array.push(val);
        this.valToIndex.set(val, this.array.length - 1)
        return true;
    }

    /**
     * @param {number} val
     * @return {boolean}
     */
    remove(val) {
        if(!this.valToIndex.has(val)) return false;

        let idx = this.valToIndex.get(val);
        let lastVal = this.array[this.array.length-1];

        this.array[idx] = lastVal;
        this.valToIndex.set(lastVal, idx)
        this.array.pop();
        this.valToIndex.delete(val);

        return true;
    }

    /**
     * @return {number}
     */
    getRandom() {
        let idx = Math.floor(Math.random()*this.array.length);
        return this.array[idx]
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
