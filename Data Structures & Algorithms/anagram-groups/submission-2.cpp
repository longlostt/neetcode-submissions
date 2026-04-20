#include <map>
#include <algorithm>
#include <vector>
class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        std::unordered_map<string, std::vector<string>> sorted;
        std::vector<vector<string>> res;
        for(string s : strs){
            string origS = s;   
            std::sort(s.begin(), s.end());
            sorted[s].push_back(origS);
        }
        for(auto [key, value] : sorted){
            res.push_back(value);
        }
        return res;
    }
};
