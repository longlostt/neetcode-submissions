class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {
        let plantCnt = 0;
        
        for(let i = 0; i < flowerbed.length; i++){
            if(flowerbed[i] == 0){
                let emptyLeft = (i == 0) || (flowerbed[i-1] == 0);
                let emptyRight = (i == flowerbed.length-1) || (flowerbed[i+1] == 0);

                if(emptyLeft && emptyRight){
                    flowerbed[i] = 1;
                    plantCnt++
                }
            }
        }
        return plantCnt >= n;
    }
}
