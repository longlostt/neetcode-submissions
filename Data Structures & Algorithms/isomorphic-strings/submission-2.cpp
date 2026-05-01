class Solution {
public:
    bool isIsomorphic(string s, string t) {
        if(s.size() != t.size()) return false;
        if(s.size() == 0 && t.size() == 0) return true;
        std::unordered_map<char, char> st;
        std::unordered_map<char, char> ts;

        for(int i = 0; i < s.size(); ++i){
            if(ts.contains(t[i]) || st.contains(s[i])){
                if(ts[t[i]] != s[i] && st[s[i]] != t[i]) return false;
            }
            else {
                if(!(st.contains(s[i]))) st[s[i]] = t[i];
                if(!(ts.contains(t[i]))) ts[t[i]] = s[i];
            }
        }
        return true;
    }
};