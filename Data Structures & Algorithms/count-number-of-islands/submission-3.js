class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let cnt = 0;

        function traverse(row, col){
            if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] == '0') return;

            grid[row][col] = '0';

            traverse(row + 1, col);
            traverse(row - 1, col);
            traverse(row, col + 1);
            traverse(row, col - 1);
        }

        for(let i = 0; i < rows; i++){
            for(let j = 0; j < cols; j++){
                if(grid[i][j] == '1'){
                    traverse(i,j);
                    cnt++;
                }
            }
        }
        return cnt;
    }
}
