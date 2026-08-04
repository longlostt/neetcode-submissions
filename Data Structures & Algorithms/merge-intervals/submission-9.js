class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        let res = [intervals[0]];
        for (let i = 1; i < intervals.length; i++) {
            let prevRight = res[res.length - 1][1];
            let nowLeft = intervals[i][0];
            if(nowLeft <= prevRight){
                let pair = res.pop();
                res.push([pair[0], intervals[i][1] > pair[1] ? intervals[i][1] : pair[1]])
            } else if(nowLeft > prevRight) {
                res.push([nowLeft, intervals[i][1]]);
            }
        }
        return res;
    }
}
