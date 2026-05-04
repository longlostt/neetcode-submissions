class RandomizedSet {
   private:
    std::unordered_map<int, int> vecMap;  // value -> index
    vector<int> intVec;

   public:
    RandomizedSet() {
        this->vecMap = vecMap;
        this->intVec = intVec; 
    }

    bool insert(int val) {
        if (this->vecMap.count(val)) {
            return false;
        } else {
            intVec.push_back(val);
            vecMap[val] = intVec.size() - 1;
            return true;
        }
    }

    bool remove(int val) {
        if (!this->vecMap.count(val)) {
            return false;
        } else {
            int idx = vecMap[val];
            int lastVal = intVec[intVec.size() - 1];

            intVec[idx] = lastVal;  // replace val with last val of vector
            intVec.pop_back();      // pop_back()

            vecMap[lastVal] = idx;  // update the idx for the moved val in map
            vecMap.erase(val);      // remove old from map
            return true;
        }
    }

    int getRandom() { return intVec[std::rand() % intVec.size()]; }
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * RandomizedSet* obj = new RandomizedSet();
 * bool param_1 = obj->insert(val);
 * bool param_2 = obj->remove(val);
 * int param_3 = obj->getRandom();
 */