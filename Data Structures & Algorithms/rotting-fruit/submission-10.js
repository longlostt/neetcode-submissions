class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let minutes = 0;
        let fresh = 0;
        let q = [];

        for(let i = 0; i < rows; i++){
            for(let j = 0; j < cols; j++){
                if(grid[i][j] == 2){
                    q.push([i,j])
                } else if(grid[i][j] == 1) {
                    fresh++;
                }
            }
        }

        while(q.length && fresh > 0){
            let size = q.length;
            for(let i = 0; i < size; i++){
                let [row, col] = q.shift();
                if(row+1 < rows && grid[row+1][col] == 1){
                    q.push([row+1, col]);
                    grid[row+1][col] = 2;
                    fresh--;
                }
                if(row-1 >= 0 && grid[row-1][col] == 1){
                    q.push([row-1, col])
                    grid[row-1][col] = 2
                    fresh--;
                }
                if(col+1 < cols && grid[row][col+1] == 1){
                    q.push([row, col+1])
                    grid[row][col+1] = 2
                    fresh--;
                }
                if(col-1 >= 0 && grid[row][col-1] == 1){
                    q.push([row, col-1])
                    grid[row][col-1] = 2
                    fresh--;
                }
            }
            minutes++;
        }

        return fresh > 0 ? -1 : minutes;
    }
}
