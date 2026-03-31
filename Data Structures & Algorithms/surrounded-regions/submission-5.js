class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let rows = board.length;
        let cols = board[0].length;

        function dfs(row, col){
            if(row < 0 || row >= rows || col < 0 || col >= cols || board[row][col] === 'X' || board[row][col] === 'S') return;

            board[row][col] = 'S';

            dfs(row+1,col)
            dfs(row-1,col)
            dfs(row,col+1)
            dfs(row,col-1)

        }

        for(let i = 0; i < rows; i++){
            for(let j = 0; j < cols; j++){
                let stateO = board[i][j] == 'O';
                if((i == 0 && stateO) || (j == 0 && stateO) || (i == rows-1 && stateO) || (j == cols-1 && stateO)){
                    dfs(i, j)
                }
            }
        }

        for(let i = 0; i < rows; i++){
            for(let j = 0; j < cols; j++){
                if(board[i][j] == 'S'){ 
                    board[i][j] = 'O'
                } else {
                    board[i][j] = 'X'
                }
            }
        }
        return board
    }
}
