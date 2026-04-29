class Solution {
public:
    int majorityElement(vector<int>& nums) {
        std::unordered_map<int, int> freq;
        
        for(int i = 0; i < nums.size(); ++i){
            freq[nums[i]]++;
        }

        for(const auto& [key, value] : freq){
            if(value > nums.size()/2) return key;
        }
    }
};