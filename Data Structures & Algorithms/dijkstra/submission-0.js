/**
 * const PriorityQueue = require('priority-queue-js');
 */

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number} src
     * @returns {Object}
     */
    shortestPath(n, edges, src) {
        let adj = new Map();
        for(const [source, destination, weight] of edges){
            if(!adj.has(source)){
                adj.set(source, []);
            }
            adj.get(source).push([destination, weight]);
        }

        let ans = new Map();
        let minHeap = new PriorityQueue((a,b) => a[1] - b[1]);
        minHeap.enqueue([src, 0]);

        while(!minHeap.isEmpty()){
            let [curVector, curWeight] = minHeap.dequeue();

            if(ans.has(curVector)){
                continue;
            }
            ans.set(curVector, curWeight);
            if(!adj.has(curVector)) continue;
        
            for(let [dest, destWeight] of adj.get(curVector)){
                if(!ans.has(dest)){
                    let newWeight = curWeight + destWeight;
                    minHeap.enqueue([dest, newWeight]);
                }
            }
        }

        for(let i = 0; i < n; i++){
            if(!ans.has(i)) ans.set(i, -1);
        }

        return Object.fromEntries(ans);

    }
}
