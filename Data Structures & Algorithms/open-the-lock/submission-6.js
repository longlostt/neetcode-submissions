class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    openLock(deadends, target) {
        // holy wall of text 4/10
        if (target == "0000") return 0;
        let dead = new Set(deadends);
        if (dead.has(target) || dead.has("0000")) return -1;

        let steps = 0;
        let start = "0000";
        let q = [];
        let visited = new Map();
        visited.set(start, true);

        q.push(start);

        while (q.length > 0) {
            let len = q.length;
            for (let i = 0; i < len; i++) {
                let curComb = q.shift();
                if (curComb == target) return steps;
                let adj = qComb(curComb);
                for (let comb of adj) {
                    if (!deadends.includes(comb) && !visited.has(comb)) {
                        visited.set(comb, true);
                        q.push(comb);
                    }
                }
            }
            steps++;
        }
        return -1;
        function qComb(comb) {
            let res = [];
            for (let i = 0; i < 4; i++) {
                let d = Number(comb[i]);
                let dDown = ((d + 10 - 1) % 10).toString();
                let dUp = ((d + 10 + 1) % 10).toString();

                let down = comb.split("");
                down[i] = dDown;
                res.push(down.join(""));

                let up = comb.split("");
                up[i] = dUp;
                res.push(up.join(""));
            }
            return res;
        }
    }
}
