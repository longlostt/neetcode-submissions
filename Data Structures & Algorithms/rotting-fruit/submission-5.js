class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const queue = [];
        let fresh = 0;
        let minutes = 0;

        // look for rotten fruit
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === 2) queue.push([i, j]);
                else if (grid[i][j] === 1) fresh++;
            }
        }

        // bfs
        while (queue.length > 0 && fresh > 0) {
            const size = queue.length;

            for (let s = 0; s < size; s++) {
                const [i, j] = queue.shift();

                // down
                if (i + 1 < grid.length && grid[i + 1][j] === 1) {
                    grid[i + 1][j] = 2;
                    fresh--;
                    queue.push([i + 1, j]);
                }

                // up
                if (i - 1 >= 0 && grid[i - 1][j] === 1) {
                    grid[i - 1][j] = 2;
                    fresh--;
                    queue.push([i - 1, j]);
                }

                // right
                if (j + 1 < grid[i].length && grid[i][j + 1] === 1) {
                    grid[i][j + 1] = 2;
                    fresh--;
                    queue.push([i, j + 1]);
                }

                // left
                if (j - 1 >= 0 && grid[i][j - 1] === 1) {
                    grid[i][j - 1] = 2;
                    fresh--;
                    queue.push([i, j - 1]);
                }
            }

            minutes++; // add time at each wave
        }

        return fresh === 0 ? minutes : -1;
    }

}
