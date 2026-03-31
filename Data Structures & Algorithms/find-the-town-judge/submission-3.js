class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        let trustMap = new Map();
        for(let i = 1; i <= n; i++){
            trustMap.set(i, 0)
        }

        for(let i = 0; i < trust.length; i++){
            if(trustMap.has(trust[i][0])) trustMap.delete(trust[i][0])
            trustMap.set(trust[i][1], trustMap.get(trust[i][1]) + 1)
        }
        
        for(let [key, value] of trustMap){
            if (value === n-1 && key) {
                return key
            }
        }
        return -1
    }
}
