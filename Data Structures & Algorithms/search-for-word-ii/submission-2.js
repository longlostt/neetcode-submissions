class TrieNode {
    constructor() {
        this.children = new Array(26).fill(0);
        this.word = null;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    _getIdx(c) {
        return String(c).charCodeAt() - "a".charCodeAt();
    }

    _dfs(board, row, col, node, res) {
        if ( row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] == "#" || !node.children[this._getIdx(board[row][col])]) return;
        // boundary, seen, and no next trie node checks

        let next = node.children[this._getIdx(board[row][col])]; // next node to traverse to
        if (!next) return; // if no such node exists, stop

        if (next.word !== null) { // if word exists (hence, end of word), push to global res, and make it null to not push duplicates
            res.push(next.word);
            next.word = null;
        }

        let temp = board[row][col]; // standart search w/ backtrack (unconditional backtrack works since word got deduplicated - something I would've never came up with myself sadly)
        board[row][col] = "#";
        this._dfs(board, row + 1, col, next, res);
        this._dfs(board, row - 1, col, next, res);
        this._dfs(board, row, col + 1, next, res);
        this._dfs(board, row, col - 1, next, res);
        board[row][col] = temp;
    }

    findWords(board, words) {
        let root = new TrieNode(); 
        let cur = root;

        for (let word of words) {
            for (let c of word) {
                let idx = this._getIdx(c);
                if (cur.children[idx] == 0) {
                    cur.children[idx] = new TrieNode();
                }
                cur = cur.children[idx];
            }
            cur.word = word; // after each word, add the whole word to the last char TrieNode (similarly to "IsEndOfWord" bool)
            cur = root;
        }

        // We now have a populated trie

        let res = [];
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[row].length; col++) {
                this._dfs(board, row, col, cur, res); // void call since _dfs handles the res array population.
            }
        }
        return res;
    }
}
