class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isUgly(n) {
        if(n < 0) return false;
        let valid = [2,3,5];
        function shave(n){
            if(n == 1) return true;
            for(let num of valid){
                if(n % num == 0) return shave(n/num);
            }
            return false;
        }
        return shave(n)
        
    }
}
