class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        std::unordered_set<int> seen(nums.begin(), nums.end());
        int res = 0;
        for(int i=0; i < nums.size(); i++){
            if(!seen.count(nums[i]-1)){
                int cnt = 1;
                int curVal = nums[i];
                while(seen.count(curVal+1)){
                    cnt++;
                    curVal++;
                }
                res = max(cnt, res);
            }
        }
        return res;
    }
};
