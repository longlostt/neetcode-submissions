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
    vector<vector<int>> levelOrder(TreeNode* root) {
        vector<vector<int>> res; 
        if (root == nullptr) return res;

        std::queue<TreeNode*> q;
        q.push(root);

        while(!q.empty()){
            vector<int> curLevel;
            int size = q.size();
            
            for(int i = 0; i < size; i++){
                TreeNode* node = q.front(); q.pop();
                if(node){
                    curLevel.push_back(node->val);
                    q.push(node->left);
                    q.push(node->right);
                }
            }
            if(!curLevel.empty()){
                res.push_back(curLevel);
            }
        }
        return res;
    }
};
