class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        let newX = String(x).split("").reverse();
        if (newX[newX.length - 1] == "-") {
            let minus = newX.pop();
            newX.unshift(minus);
        }
        newX = newX.join("");
        newX = Number(newX);
        if (newX > Math.pow(2, 31)-1 || newX < -Math.pow(2, 31)) {
            return 0;
        } else {
            return newX;
        }
    }
}
