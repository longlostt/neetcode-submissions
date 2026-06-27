class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        if (!matrix || matrix.length === 0 || matrix[0].length === 0) return 0;

        let rows = matrix.length;
        let cols = matrix[0].length;
        
        // Use a 2D array for the cache instead of a Map for faster lookups
        let cache = Array.from({ length: rows }, () => Array(cols).fill(0)); 
        
        function dfs(row, col) {
            // If already calculated, return the cached result
            if (cache[row][col] !== 0) return cache[row][col];
            
            let cur = matrix[row][col];
            let dir1 = 0, dir2 = 0, dir3 = 0, dir4 = 0;
            
            // Safely check bounds AND check if the next value is strictly greater
            if (row + 1 < rows && matrix[row + 1][col] > cur) dir1 = dfs(row + 1, col);
            if (row - 1 >= 0   && matrix[row - 1][col] > cur) dir2 = dfs(row - 1, col);
            if (col + 1 < cols && matrix[row][col + 1] > cur) dir3 = dfs(row, col + 1);
            if (col - 1 >= 0   && matrix[row][col - 1] > cur) dir4 = dfs(row, col - 1);
            
            // Cache and return the result for this cell
            cache[row][col] = 1 + Math.max(dir1, dir2, dir3, dir4);
            return cache[row][col];
        }
        
        let max = 0;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                max = Math.max(max, dfs(i, j));
            }
        }
        
        return max;
    }
}