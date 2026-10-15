class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[][]}
     */
    transpose(matrix) {
        let ans = []; // row -> col, col -> row
        for(let _ = 0; _ < matrix[0].length; _++) ans.push([]);

        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[i].length; j++){
                ans[j][i] = matrix[i][j];
            }
        }
        return ans;
    }
}
