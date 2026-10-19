class TimeMap {
    constructor() {
        this.keyStore = new Map(); // key -> [[timestamp, value]];
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let sortedArrs = this.keyStore.get(key); // [ [1, asd], [3, fff], [4, hhh] ]
        if (!sortedArrs) return "";

        let l = 0;
        let r = sortedArrs.length - 1;

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (sortedArrs[mid][0] == timestamp) {
                return sortedArrs[mid][1]; // return value
            } else if (sortedArrs[mid][0] < timestamp) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return r >= 0 ? sortedArrs[r][1] : "";
    }
}
