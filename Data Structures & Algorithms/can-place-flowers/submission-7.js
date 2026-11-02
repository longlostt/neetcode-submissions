class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {
        let plantCnt = 0;
        if(flowerbed.length == 1){
            if(flowerbed[0] == 0){
                return true
            } else {
                if(n<=0) return true;
                return false
            }
        }
        for(let i = 0; i < flowerbed.length; i++){
            if(flowerbed[i] == 0){
                if((i == 0 && flowerbed[i+1] == 0) || (i == flowerbed.length-1 && flowerbed[i-1] == 0)){
                    plantCnt++;
                    flowerbed[i] = 1;
                    continue;
                } else {
                    if(flowerbed[i+1] == 0 && flowerbed[i-1] == 0){
                        plantCnt++;
                        flowerbed[i] = 1;
                    }
                }
            }
        }
        return plantCnt >= n ? true : false;
    }
}
