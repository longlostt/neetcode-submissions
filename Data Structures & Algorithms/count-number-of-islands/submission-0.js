class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */

    numIslands(grid) { 

        function traversal(i, j){
            if(i < 0 || j < 0 || i > grid.length-1 || j > grid[0].length-1) return; // out of bounds check
            console.log(i, j, grid[i][j])

            if(grid[i][j] == "0") return;

            grid[i][j] = "0";
            traversal(i+1, j)
            traversal(i, j+1)
            traversal(i-1, j)
            traversal(i, j-1)
        }

        let count = 0;  
        for(let i = 0; i<grid.length; i++){
            for(let j = 0; j < grid[i].length; j++){
                if(grid[i][j] === "1"){
                    traversal(i, j);
                    count++;
                }
            }
        }
        return count;
    }
}
