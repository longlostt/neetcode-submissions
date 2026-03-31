class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let rows = board.length;
        let cols = board[0].length;
    
        function search(row, col, sWord) {  
            if(row < 0 || col < 0 || row >= rows || col >= cols || board[row][col] == 'visited') return;
            sWord += board[row][col];
            if(sWord === word) return true;

            board[row][col]= "visited";

            console.log(sWord)

            if(search(row+1, col, sWord)) return true;
            if(search(row-1, col, sWord)) return true;
            if(search(row, col+1, sWord)) return true;
            if(search(row, col-1, sWord)) return true;

            board[row][col] = sWord[sWord.length-1];
            sWord = sWord.slice(0, sWord.length-1);
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if(search(i, j, "")){
                    return true;
                }
            }
        }
        return false;
    }
}
