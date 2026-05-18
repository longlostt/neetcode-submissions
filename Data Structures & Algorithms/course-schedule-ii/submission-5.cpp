class Solution {
public:
    vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {
        std::unordered_map<int, vector<int>> adj;
        std::unordered_map<int, int> indeg;

        for(vector<int> p : prerequisites){
            int out = p[1];
            int in = p[0];
            adj[out].push_back(in);
            indeg[in]++;
            indeg[out];
        }

        for(int i = 0; i < numCourses; i++){
            indeg[i];
        }
        std::queue<int> q;
        vector<int> res;

        for(const auto& [key, val] : indeg){
            if(val == 0) q.push(key);
        }

        while(!q.empty()){
            int top = q.front(); q.pop();
            res.push_back(top);
            for(int i : adj[top]){
                if(--indeg[i] == 0) q.push(i);
            }
        }
        vector<int>subRes;
        return res.size() == numCourses ? res : subRes;

    }
};
