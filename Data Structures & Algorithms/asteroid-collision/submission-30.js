class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let stack = [];
        for (let asteroid of asteroids){
            let alive = true;
            while(alive && stack.length > 0 && stack[stack.length - 1] > 0 && asteroid < 0){
                if(Math.abs(stack[stack.length - 1]) < Math.abs(asteroid)){
                    stack.pop()
                } else if (Math.abs(stack[stack.length - 1]) === Math.abs(asteroid)){
                    stack.pop();
                    alive = false;
                } else if (Math.abs(stack[stack.length - 1]) > Math.abs(asteroid)){
                    alive = false;
                }
            }
            if (alive === true) {
                stack.push(asteroid);
            }
        }
        return stack
    }
}

