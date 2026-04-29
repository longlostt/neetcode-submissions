class Solution {
   public:
    static bool compare(const std::pair<int, int>& a, const std::pair<int, int>& b) {
        return a.second > b.second;
    }
    vector<int> topKFrequent(vector<int>& nums, int k) {
        std::unordered_map<int, int> counts;
        std::vector<std::pair<int, int>> resSorted;
        std::vector<int> res;

        for (int i = 0; i < nums.size(); ++i) {
            counts[nums[i]]++;
        }

        for (const auto& [key, value] : counts) {
            resSorted.push_back({key, value});
        }

        std::sort(resSorted.begin(), resSorted.end(), compare);

        for (int j = 0; j < k; ++j) {
            res.push_back(resSorted[j].first);
        }
        return res;
    }
};
