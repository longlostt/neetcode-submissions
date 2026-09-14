class Solution {
    /**
     * @param {number[][]} tasks
     * @return {number[]}
     */
    getOrder(tasks) {
        let res = [];
        let timeSorted = [];
        for(let i = 0; i < tasks.length; i++){
            timeSorted.push([tasks[i][0], tasks[i][1], i]);
        }
        timeSorted.sort((a,b) => a[0] - b[0]);
        
        let curTime = 0;
        let i = 0;
        let q = new PriorityQueue((a,b) => a[1] == b[1] ? a[0] - b[0] : a[1] - b[1]);

        while(i < timeSorted.length || q.size() > 0){
            if(q.size() == 0){
                curTime = Math.max(curTime, timeSorted[i][0]);
            }

            while(i < timeSorted.length && timeSorted[i][0] <= curTime){
                q.enqueue([timeSorted[i][0], timeSorted[i][1], timeSorted[i][2]]);
                i++;
            }

            let top = q.front();
            q.dequeue();
            res.push(top[2]);
            curTime += top[1];
        }
        return res;
    }
}
