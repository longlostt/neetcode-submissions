/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        intervals.sort((a,b) => a.start - b.start);
        const heap = new MinPriorityQueue();
        for (let i = 0; i < intervals.length; i++) {
            if(!heap.isEmpty() && heap.front() <= intervals[i].start){
                heap.pop();
            }
            heap.push(intervals[i].end)
        }
        return heap.size();
    }
}
