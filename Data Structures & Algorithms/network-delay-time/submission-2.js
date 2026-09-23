class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        let adj = new Map();
        for(let [u,v,w] of times){
            if(!adj.has(u)){
                adj.set(u, []);
            }
            adj.get(u).push([v,w]);
        }

        let ansMap = new Map();
        let minHeap = new PriorityQueue((a,b) => a[1] - b[1]);
        minHeap.enqueue([k, 0]);
        
        while(!minHeap.isEmpty()){
            let [curVector, curWeight] = minHeap.dequeue();

            if(ansMap.has(curVector)) continue;
            ansMap.set(curVector, curWeight);
            if(!adj.get(curVector)) continue;

            for(let [u, w] of adj.get(curVector)){
                if(!ansMap.has(u)){
                    let newWeight = curWeight + w;
                    minHeap.enqueue([u, newWeight]);
                }
            }
        }

        for(let i = 1; i <= n; i++){
            if(!ansMap.has(i)) ansMap.set(i, -1);
        }

        let ans = -Infinity;

        for(let [_, weight] of ansMap){
            if(weight == -1) return -1;
            ans = Math.max(ans, weight);
        }

        return ans;

    }
}
