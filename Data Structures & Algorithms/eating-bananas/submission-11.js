class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let output = 0;
        let k = 1;
        while(true){            
            for(let i = 0; i < piles.length; i++){
                output += Math.ceil(piles[i]/k);
            }
            if(output<=h){
                return k;
            }
            output = 0;
            k++
        }
    }
}
