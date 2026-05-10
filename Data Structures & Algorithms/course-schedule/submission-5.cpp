class Solution {
public:
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        std::unordered_map<int, int> indegree;
        std::unordered_map<int, std::vector<int>> adj;

        for(vector<int> pairs: prerequisites){
            adj[pairs[0]].push_back(pairs[1]);
            indegree[pairs[0]];
            indegree[pairs[1]]++;
        }

        std::queue<int> q;
        std::vector<int> res;

        for(int i = 0; i < numCourses; ++i){
            if(indegree[i] == 0) q.push(i);
        }

        while(!q.empty()){
            int top = q.front(); q.pop();
            res.push_back(top);
            for(int v : adj[top]){
                if(--indegree[v] == 0) q.push(v);
            }
        }
        return res.size() == numCourses ? true : false;
    }
};
