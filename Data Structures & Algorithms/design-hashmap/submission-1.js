class Node {
    constructor(initKey, value) {
        this.initKey = initKey;
        this.value = value;
        this.next = null;
    }
}

class MyHashMap {
    constructor() {
        this.prime = 769;
        this.bucket = Array.from({length:this.prime}, () => new Node(-1, -1)); // bucket[key%this.size] = Node(initKey, value);
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let idx = key % this.prime;
        let root = this.bucket[idx];
        while (root.next) {
            if (root.next.initKey == key) {
                root.next.value = value;
                return;
            }
            root = root.next;
        }
        root.next = new Node(key, value);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let idx = key % this.prime;
        let root = this.bucket[idx].next;
        while (root) {
            if(root.initKey == key){
                return root.value;
            }
            root = root.next;
        }

        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let idx = key % this.prime;
        let root = this.bucket[idx];
        while (root.next) {
            if (root.next.initKey == key) {
                root.next = root.next.next;
                return;
            }
            root = root.next;
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
