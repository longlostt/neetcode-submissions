class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rowSet = new Set();
        let colSet = new Set();
        let subgridSet = new Set();

        for(let i=0; i<9; i++){ // rows
            rowSet.clear();
            for(let j=0; j<9; j++){
                let cell = board[i][j];
                if(cell === '.') continue;
                if(rowSet.has(cell)) return false;
                rowSet.add(cell);
            }
        }
        for(let i=0; i<9; i++){ // cols
            colSet.clear();
            for(let j=0; j<9; j++){
                let cell = board[j][i];
                if(cell === '.') continue;
                if(colSet.has(cell)) return false;
                colSet.add(cell);
            }
        }

        // scary 4 for loops, still 81 checks doe 
        // first 2 loops -> top left cell of each subgrid
        // last 2 loops -> iteration over each cell in a subgrid
        for(let i=0; i<9; i+=3){ 
            for (let j=0; j<9; j+=3){
                subgridSet.clear();
                for(let r = i; r < i+3; r++){ // i+3 and j+3 to not break the boundary of each subgrid
                    for(let c = j; c < j+3; c++){
                        let cell = board[r][c];
                        if(cell === '.') continue;
                        if(subgridSet.has(cell)) return false;
                        subgridSet.add(cell); 
                    }
                }
            }
        }
        return true;

    }
}
