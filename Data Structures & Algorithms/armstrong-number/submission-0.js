class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isArmstrong(n) {
        let nArr = String(n).split('');
        let k = nArr.length;
        let sum = 0;
        for(let char of nArr){
            sum += Math.pow(Number(char), k);
        }
        return sum == n;
    }
}
