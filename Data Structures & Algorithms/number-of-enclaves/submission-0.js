class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    numEnclaves(grid) {
        let cnt = 0;
        let rows = grid.length;
        let cols = grid[0].length;
        function dfs(row, col) {
            if(row >= rows || row < 0 || col >= cols || col < 0 || grid[row][col] == 'visited' || grid[row][col] == 0) return;
            grid[row][col] = 'visited';
            dfs(row+1,col);
            dfs(row-1,col);
            dfs(row,col+1);
            dfs(row,col-1);
        }

        for (let i = 0; i < cols; i++) { // top
            if (grid[0][i] == 1) {
                dfs(0, i);
            }
        }
        for(let i = 0; i < rows; i++){ // left
           if (grid[i][0] == 1) {
                dfs(i, 0);
            } 
        }
        for(let i = 0; i < rows; i++){ // right
           if (grid[i][cols-1] == 1) {
                dfs(i, cols-1);
            } 
        }
        for(let i = 0; i < cols; i++){ // bottom
           if (grid[rows-1][i] == 1) {
                dfs(rows-1, i);
            } 
        }
        
        for(let r = 0; r < rows; r++){
            for(let c = 0; c < cols; c++){
                if(grid[r][c] == 1) cnt++;
            }
        }
        return cnt;
    }
}
