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
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a, b) => a.start-b.start);
        let oldEnd = 0;
        let newStart = 0;
        for(let i = 0; i < intervals.length; i++){
            if(i == 0){
                oldEnd = intervals[i].end;
                continue; // nothing to compare yet
            }
            newStart = intervals[i].start;
            if(newStart < oldEnd) return false;
            oldEnd = intervals[i].end;
        
        }
        return true;
    }
}
