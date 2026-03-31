class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {

        let curColor = image[sr][sc]

        function fill(row, col){
            if(row >= image.length || row < 0 || col >= image[0].length || col < 0 || image[row][col] == color || image[row][col] !== curColor) return

            image[row][col] = color;

            fill(row+1, col)
            fill(row-1, col)
            fill(row, col+1)
            fill(row, col-1)
        }

        fill(sr,sc)
        return image
    }
}
