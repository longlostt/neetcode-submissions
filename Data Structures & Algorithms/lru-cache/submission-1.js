// Map in JS preserves order. it would be our cache


class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) { // after get(), mark it as 'recently used' - meaning re-insert with the same value
        if(!this.cache.has(key)) return -1; // doesnt exist, retunr -1

        let val = this.cache.get(key) //
        this.cache.delete(key); //  
        this.cache.set(key, val); // re-insert the same key-value
        return val; // exists, return the val
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) { // 2 main cases
        if(this.cache.has(key)){  // 1. already has a value - just need to update
            this.cache.delete(key);
            this.cache.set(key,value);
        } else { // 2. doesnt have a value - need to set new
            if(this.cache.size >= this.capacity){ // a. capacity exceeded - remove lru, add new
                let lruKey = this.cache.keys().next().value
                this.cache.delete(lruKey);
                this.cache.set(key,value);
            } else { // b. size < capacity - add without removing anything
                this.cache.set(key,value);
            }
        }

    }
}
