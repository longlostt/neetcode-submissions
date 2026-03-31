class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let leftK = 1;
        let rightK = Math.max(...piles);
        let total = 0;

        while(leftK <= rightK){
            let midK = Math.ceil((rightK + leftK) / 2);
            for(let pile of piles){
                total += Math.ceil(pile/midK);
            }
            if(total > h){
                leftK = midK + 1;
            } else if(total <= h) {
                rightK = midK - 1;
            }
            total = 0;
        }
        return leftK;
    }
}
