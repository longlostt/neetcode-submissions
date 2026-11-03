class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let largest = 0;
        let maxHeap = new PriorityQueue((a, b) => b - a);
        for (let num of nums) {
            maxHeap.enqueue(num);
        }
        for (let _ = 0; _ < k; _++) {
            largest = maxHeap.dequeue();
        }
        return largest;
    }
}
