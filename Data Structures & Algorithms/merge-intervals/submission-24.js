class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        let ans = [intervals[0]];
        console.log(intervals)
        for (let i = 1; i < intervals.length; i++) {
            let lastMerged = ans[ans.length-1];
            let cur = intervals[i];
            if(cur[1] <= lastMerged[1]){
                continue; // keep lastMerged since its bigger
            } else if(cur[0] <= lastMerged[1]){
                ans.pop();
                ans.push([lastMerged[0], cur[1]])
            }  
            else {
                ans.push(cur)
            }
        }

        return ans;
    }
}
