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
    bool is_valid_helper(TreeNode* root, int min, int max) {
        if (root == nullptr) return true;
        if (root->val >= max || root->val <= min) {
            return false;
        }
        return is_valid_helper(root->left, min, root->val) &&
               is_valid_helper(root->right, root->val, max);
    }
    bool isValidBST(TreeNode* root) { return is_valid_helper(root, INT_MIN, INT_MAX); }
};
