class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        console.log(intervals)
        let res = [];

        for (let i = 0; i < intervals.length; i++) {
            if (res.length == 0) { res.push(intervals[i]); }
            else {
                if(intervals[i][0] <= res[res.length-1][1]){
                    let prev = res.pop();
                    res.push([prev[0], intervals[i][1] > prev[1] ? intervals[i][1] : prev[1]]);
                }
                else if (intervals[i][0] > res[res.length - 1][1]) { // add if bigger
                    res.push(intervals[i]);
                }
            }
            console.log(res)
        }
        return res;
    }
}