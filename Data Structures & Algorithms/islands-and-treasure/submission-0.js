class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let inf = 2147483647;
        let q = [];

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == 0) q.push([i, j, 0])
            }
        }

        while (q.length > 0) {
            let cur = q.shift();
            let row = cur[0]
            let col = cur[1]
            let depth = cur[2]
            if (row >= 0 && row < grid.length && col >= 0 && col < grid[0].length && (grid[row][col] === inf || grid[row][col] === 0)) {
                q.push([row + 1, col, depth + 1])
                q.push([row - 1, col, depth + 1])
                q.push([row, col + 1, depth + 1])
                q.push([row, col - 1, depth + 1])
                if(grid[row][col] > depth) grid[row][col] = depth;
            }
        }




    }
}

