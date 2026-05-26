/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */

class Solution {
public:
    vector<vector<int>> res;
    int dfs(TreeNode* root){
        if (!root) return -1;
        int idx = max(dfs(root->left), dfs(root->right))+1;
        vector<int> v = {root->val};
        idx == res.size() ? res.push_back(v) : res[idx].push_back(root->val);
        return idx;
    }

    vector<vector<int>> findLeaves(TreeNode* root) {
        dfs(root);
        return res;
    }
};
