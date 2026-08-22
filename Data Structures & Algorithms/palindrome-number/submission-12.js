class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x) {
        if(x == 0) return true
        if(x < 0 || x % 10 == 0) return false

        let reversedX = 0;
        let xCopy = x;

        while(xCopy > 0){
            reversedX *= 10;
            reversedX += xCopy % 10;
            xCopy = Math.trunc(xCopy / 10);
        }

        while(x > 0 && reversedX > 0){
            if(x % 10 !== reversedX % 10) return false;
            x = Math.trunc(x / 10);
            reversedX = Math.trunc(reversedX / 10);
        }
        return true;
    }
}
