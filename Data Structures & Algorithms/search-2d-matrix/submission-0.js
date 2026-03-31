class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        function binaryArray(array){
        let left = 0;
        let right = array.length - 1;
        while (right >= left) {
            let middle = Math.ceil((right + left) / 2);
            console.log(array[middle])
            if (array[middle] > target) {
                right = middle - 1;
            } else if(array[middle] < target){
                left = middle + 1;
            } else {
                return true;
            }
        }
        return false;
    }

    let left = 0;
    let right = matrix.length - 1;
    while (right >= left){
        if (right === left) return binaryArray(matrix[left])
        let middle = Math.ceil((right + left) / 2);
        if(matrix[middle][0] > target){
            right = middle - 1;
        } else if (matrix[middle][0] < target){
            left = middle;
        } else {
            return true;
        }

    }
    return false;
    }
}
