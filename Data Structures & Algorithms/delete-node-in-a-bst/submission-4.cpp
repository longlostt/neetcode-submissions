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
    TreeNode* dfs(TreeNode* root, int key) {
        if (!root) return nullptr;
        if (root->val == key) {
            if (!root->right && !root->left) {
                return nullptr;
            } else if (root->right && !root->left) {
                root = root->right;
                return root;
            } else if (!root->right && root->left) {
                root = root->left;
                return root;
            } else {  // both
                TreeNode* leftCh = root->right->left;
                if (leftCh) {
                    while (leftCh->left) {
                        leftCh = leftCh->left;
                    }
                    leftCh->left = root->left;
                    root = root->right;
                    return root;
                } else {
                    TreeNode* temp = root->left;
                    root = root->right;
                    root->left = temp;
                    return root;
                }
            }
        } else {
            if (root->val < key)
                root->right = dfs(root->right, key);
            else
                root->left = dfs(root->left, key);
            return root;
        }
    }

    TreeNode* deleteNode(TreeNode* root, int key) { return dfs(root, key); }
};