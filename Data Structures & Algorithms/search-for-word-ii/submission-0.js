class TrieNode{
    constructor(){
        this.children = new Array(26).fill(0);
        this.isEndOfWord = false;
        this.word = null;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    _getIdx(c){
        return String(c).charCodeAt() - "a".charCodeAt();
    }

    _dfs(board, row, col, node, res){
        if(row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] == "#" || !node.children[this._getIdx(board[row][col])]) return;
        
        let next = node.children[this._getIdx(board[row][col])];
        if(!next) return;

        if(next.word !== null){
            res.push(next.word);
            next.word = null;
        }

        let temp =  board[row][col];
        board[row][col] = "#";
        this._dfs(board,row+1,col,next,res);
        this._dfs(board,row-1,col,next,res);
        this._dfs(board,row,col+1,next,res);
        this._dfs(board,row,col-1,next,res);
        board[row][col] = temp;

    }

    findWords(board, words) {
        let root = new TrieNode();
        let cur = root;

        for(let word of words){
            for(let c of word){
                let idx = this._getIdx(c)
                if(cur.children[idx] == 0){
                    cur.children[idx] = new TrieNode();
                }
                cur = cur.children[idx];
            }
            cur.isEndOfWord = true;
            cur.word = word;
            cur = root;
        }

        // we now have a populated trie
        let res = []
        for(let row = 0; row < board.length; row++){
            for(let col = 0; col < board[row].length; col++){
                this._dfs(board,row,col, cur, res);
                
            }
        }
        return res;
    }
}
