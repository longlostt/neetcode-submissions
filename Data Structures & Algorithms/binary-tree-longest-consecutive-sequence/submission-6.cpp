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
    int maxLen = 0;
    int dfs(TreeNode* root, int curVal, int seqLen){
        if (!root) return seqLen;
        maxLen = max(maxLen, seqLen);
        if (root->val == curVal+1) {
            return max(maxLen, max(dfs(root->left, root->val, seqLen+1), dfs(root->right, root->val, seqLen+1)));
        } else {
            return max(maxLen, max(dfs(root->left, root->val, 1), dfs(root->right, root->val, 1)));
        }
    }

    int longestConsecutive(TreeNode* root) {
        return dfs(root, root->val-1, 0);
    }
};
