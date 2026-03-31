class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let cache = new Map();
        function dp(i){
            console.log(cache)
            if(cache.get(i)) return cache.get(i);
            if(i >= cost.length) return 0;
            let oneStep = dp(i+1);
            let twoStep = dp(i+2);
            let minSteps = Math.min(oneStep, twoStep);
            cache.set(i, cost[i] + minSteps);
            return cost[i] + minSteps;

        }
        let idx0 = dp(0);
        let idx1 = dp(1);

        return Math.min(idx0, idx1);
    }
}
