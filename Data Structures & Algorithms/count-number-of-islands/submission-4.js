class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let visited = structuredClone(grid);
        let cnt = 0;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (visited[i][j] == "1") {
                    dfs(i, j);
                    cnt++;
                }
            }
        }

        return cnt;

        function dfs(row, col) {
            if (row < 0 || row >= rows || col < 0 || col >= cols || visited[row][col] == "seen" || visited[row][col] == "0") return;
            visited[row][col] = "seen";
            dfs(row + 1, col);
            dfs(row - 1, col);
            dfs(row, col + 1);
            dfs(row, col - 1);
        }
    }
}
