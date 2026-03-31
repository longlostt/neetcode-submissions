class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let gridArea = 0;
        let maxArea = 0;
        function dfs(row, col) {
            if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === 0) return;

            grid[row][col] = 0;
            
            gridArea += 1;

            dfs(row + 1, col)
            dfs(row - 1, col)
            dfs(row, col + 1)
            dfs(row, col - 1)
        }

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1) {
                    dfs(i, j);
                    maxArea = Math.max(gridArea, maxArea);
                    gridArea = 0; 
                }

            }
        }

        return maxArea;
    }
}
