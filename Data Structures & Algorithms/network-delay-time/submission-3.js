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

        let minHeap = new PriorityQueue((a,b) => a[1] - b[1]);
        minHeap.enqueue([k, 0]);
        
        let visited = new Set();
        let ans = 0;
        while(!minHeap.isEmpty()){
            let [curVector, curWeight] = minHeap.dequeue();

            if(visited.has(curVector)) continue;
            visited.add(curVector);
            ans = curWeight;

            if(!adj.get(curVector)) continue;
            for(let [u, w] of adj.get(curVector)){
                if(!visited.has(u)){
                    let newWeight = curWeight + w;
                    minHeap.enqueue([u, newWeight]);
                }
            }
        }

        return visited.size == n ? ans : -1;

    }
}
