class Solution {
    asteroidCollision(asteroids) {
        let stack = [];
        for (let asteroid of asteroids) {
            let alive = true;
            while (alive && asteroid < 0 && stack.length && stack[stack.length - 1] > 0) {
                let top = stack[stack.length - 1];
                if (top < -asteroid) {
                    stack.pop();
                } else if (top === -asteroid) {
                    stack.pop();
                    alive = false;
                } else {
                    alive = false;
                }
            }
            if (alive) stack.push(asteroid);
        }
        return stack;
    }
}
