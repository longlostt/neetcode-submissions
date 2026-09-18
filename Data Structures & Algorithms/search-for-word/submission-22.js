class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {

        for(let row = 0; row < board.length; row++){
            for(let col = 0; col < board[row].length; col++){
                if(board[row][col] == word[0]){
                    if(_dfs(row,col,0)) return true;
                }
            }
        }
        return false;

        function _dfs(row,col, idx){
            if(row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] == "seen") return false;
            
            let coord = board[row][col];
            if(word[idx] != board[row][col]) return false;
            if(idx == word.length-1) return true;
            board[row][col] = "seen";

            if(_dfs(row+1, col, idx+1)) return true;
            if(_dfs(row-1, col, idx+1)) return true;
            if(_dfs(row, col+1, idx+1)) return true;
            if(_dfs(row, col-1, idx+1)) return true;

            board[row][col] = coord;
            return false;
        }
    }
}
