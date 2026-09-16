class TrieNode {
    // one singular node
    constructor() {
        this.children = new Array(26).fill(0);
        this.isEndOfWord = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    _getIndex(c) {
        return String(c).charCodeAt() - "a".charCodeAt();
    }
    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let cur = this.root;

        for (let c of word) {
            let idx = this._getIndex(c);

            if (cur.children[idx] == 0) {
                cur.children[idx] = new TrieNode();
            }
            cur = cur.children[idx];
        }
        cur.isEndOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let cur = this.root;

        for (let c of word) {
            let idx = this._getIndex(c);
            if (cur.children[idx] == 0) {
                return false; // not found sry
            }
            cur = cur.children[idx];
        }
        return cur.isEndOfWord == true ? true : false;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let cur = this.root;

        for (let c of prefix) {
            let idx = this._getIndex(c);
            if (cur.children[idx] == 0) {
                return false;
            }
            cur = cur.children[idx];
        }
        return true;
    }
}
