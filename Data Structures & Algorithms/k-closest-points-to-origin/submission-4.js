class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let minHeap = new PriorityQueue((a,b) => (Math.pow((a[0]) , 2) + Math.pow((a[1]) , 2)) - (Math.pow((b[0]) , 2) + Math.pow((b[1]) , 2)));
        
        let ans = [];
        for(let point of points){
            minHeap.enqueue(point);
        }

        for(let i = 0; i < k; i++){
            ans.push(minHeap.front());
            minHeap.dequeue();
        }
        return ans;
    }
}
