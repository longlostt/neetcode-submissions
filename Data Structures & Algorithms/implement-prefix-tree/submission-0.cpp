class TrieNode {
public:
    TrieNode* children[26];
    bool endOfWord;

    TrieNode(){
        for(int i = 0; i < 26; i++){
            children[i] = nullptr;
        }
        endOfWord = false;
    }
};

class PrefixTree {
private:
    TrieNode* root;
public:
    PrefixTree() {
        root = new TrieNode();
    }
    
    void insert(string word) {
        TrieNode* node = root;
        for(char c : word){
            int i = c - 'a';
            if(node->children[i] == nullptr) { // char not found in children
                node->children[i] = new TrieNode();
            }
            node = node->children[i];
        }
        node->endOfWord = true;
    }
    
    bool search(string word) {
        TrieNode* node = root;
        for(char c : word){
            int i = c - 'a';
            if(node->children[i] == nullptr) return false;
            node = node->children[i];
        }
        return node->endOfWord;
    }
    
    bool startsWith(string prefix) {
        TrieNode* node = root;
        for(char c : prefix){
            int i = c - 'a';
            if(node->children[i] == nullptr) return false;
            node = node->children[i];
        }
        return true;
    }
};
