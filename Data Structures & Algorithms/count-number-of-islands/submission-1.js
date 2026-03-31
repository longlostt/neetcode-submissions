class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let count = 0;

        function traversal(row, col){
            if(col < 0 || row >= rows || col >= cols || row < 0 || grid[row][col] == '0') return;

            grid[row][col] = '0';

            traversal(row-1,col)
            traversal(row+1,col)
            traversal(row,col-1)
            traversal(row,col+1)
        }

        for(let i = 0; i < rows; i++ ){
            for(let j = 0; j < cols; j++){
                if(grid[i][j] == "1"){ 
                    traversal(i,j)
                    count++
                }
            }
        }
        return count
    }
}
