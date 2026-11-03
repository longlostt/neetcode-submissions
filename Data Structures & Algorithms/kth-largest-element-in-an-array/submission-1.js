class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let maxHeap = new PriorityQueue((a, b) => b - a);
        for (let num of nums) {
            maxHeap.enqueue(num);
        }
        for (let _ = 0; _ < k-1; _++) {
            maxHeap.dequeue();
        }
        return maxHeap.front();
    }
}
