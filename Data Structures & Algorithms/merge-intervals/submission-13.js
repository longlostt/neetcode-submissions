class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        let maxIntervals = [];
        let res = [];

        for (let [start, end] of intervals) {
            if (maxIntervals[start] == undefined) {
                maxIntervals[start] = end;
            } else {
                maxIntervals[start] = Math.max(maxIntervals[start], end);
            }
            // console.log(maxIntervals[start], end);
            // console.log(maxIntervals);
        }
        console.log(maxIntervals)

        let curEnd = -1;
        let start = null;
        for (let i = 0; i < maxIntervals.length; i++) {
            if (maxIntervals[i] !== undefined) {
                // start of an intervals
                if (start == null) start = i;
                curEnd = Math.max(curEnd, maxIntervals[i]);
            }
            if (curEnd == i) {
                // end of an interval
                res.push([start, curEnd]);
                start = null;
                curEnd = -1;
            }
        }

        if(start !== null){
            res.push([start, curEnd]);
        }

        return res;
    }
}
