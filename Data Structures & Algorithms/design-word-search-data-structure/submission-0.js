class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null);
        this.isEndOfWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    _getIdx(c) {
        return String(c).charCodeAt() - "a".charCodeAt();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let cur = this.root;

        for (let c of word) {
            let idx = this._getIdx(c);
            if (cur.children[idx] == null) {
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
        return this._dfs(word, 0, this.root)
    }

    _dfs(word, idx, node) {
        if(idx == word.length) return node.isEndOfWord;

        let char = word[idx];
        if(char == "."){
            for(let child of node.children){
                if(child !== null && this._dfs(word, idx+1, child)) return true;
            }
            return false;
        } else {
            let chIdx = this._getIdx(char);
            let chNode = node.children[chIdx];

            if(chNode == null){
                return false;
            }

            return this._dfs(word, idx+1, chNode);
        }
    }
}
