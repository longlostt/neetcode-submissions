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
        const LIMIT_UP = Math.pow(2, 31) - 1;
        const LIMIT_DOWN = -Math.pow(2, 31);

        if (newX > LIMIT_UP || newX < LIMIT_DOWN) {
            return 0;
        } else {
            return newX;
        }
    }
}
