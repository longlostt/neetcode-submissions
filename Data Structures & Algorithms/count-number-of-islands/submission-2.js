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
            let q = [];
            q.push([row,col])

            while(q.length > 0){
                let cur = q.shift();
                let row = cur[0];
                let col = cur[1];
                if(cur[0] >= 0 && cur[0] < rows && cur[1] >= 0 && cur[1] < cols && grid[cur[0]][cur[1]] == '1'){
                    q.push([row+1,col])
                    q.push([row-1,col])
                    q.push([row,col+1])
                    q.push([row,col-1])
                    grid[cur[0]][cur[1]] = '0'
                } 
            }
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
