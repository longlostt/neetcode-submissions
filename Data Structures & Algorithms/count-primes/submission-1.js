class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    countPrimes(n) {
        let primes = new Array(n).fill(true);
        primes[0] = false;
        primes[1] = false;
        let cnt = 0;

        for (let i = 2; i < Math.sqrt(n); i++) {
            let scalar = 2;
            let multiple = scalar * i;
            if(primes[i] == true){
                while(multiple < n){
                    multiple = scalar * i;
                    primes[multiple] = false;
                    scalar++;
                }
            }
        }
        for(let prime of primes){
            if(prime) cnt++;
        }
        return cnt;
    }
}
