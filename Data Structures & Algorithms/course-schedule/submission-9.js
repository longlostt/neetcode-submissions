class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        if(prerequisites.length == 0) return true;
        let adj = new Map();
        let indegree = new Map();

        for(let [key,value] of prerequisites){
            if(!adj.get(value)){
                adj.set(value,[]);
            }
            if(!adj.get(key)){
                adj.set(key,[]);
            }
            adj.get(value).push(key);
            indegree.set(key, (indegree.get(key) || 0) + 1);
            indegree.set(value, (indegree.get(value) || 0));
        }

        let q = [];
        let res = [];

        for(let i = 0; i < numCourses; i++){
            adj.set(i, (adj.get(i) || []))
            if(indegree.get(i) == 0 || indegree.get(i) === undefined) q.push(i);
        }

        while(q.length != 0) {
            let top = q.pop();
            res.push(top);
            for(let out of adj.get(top)){
                indegree.set(out, indegree.get(out) - 1);
                if(indegree.get(out) == 0) q.push(out);            
            }
        }
        console.log(adj);
        console.log(indegree);
        console.log(res);
        return res.length == numCourses ? true : false;
    }
}
