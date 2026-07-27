class Node {
    constructor(key, val){
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.head = new Node(0,0);
        this.tail = new Node(0,0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.cache = new Map();
    }

    insert(node){
        let prev = this.tail.prev;
        prev.next = node;
        node.prev = prev;
        node.next = this.tail;
        this.tail.prev = node;
    }

    remove(node){
        let prevNode = node.prev;
        let nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.cache.has(key)){
            let node = this.cache.get(key);
            this.remove(node);
            this.insert(node); 
            return node.val; 
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)){
            this.remove(this.cache.get(key)); // remove from ll 
        } 
        let newNode = new Node(key, value);
        this.insert(newNode) // update ll
        this.cache.set(key, newNode);

        if(this.cache.size > this.capacity){ // at capacity
            let lru = this.head.next;
            this.remove(lru);
            this.cache.delete(lru.key);
        } 
        
    }
}
