class Union_Find{
    constructor(){
        this.parent = new Map();
        this.size = new Map();
    }

    add(x){
        if(!this.parent.has(x)){
            this.parent.set(x,x);
            this.size.set(x,1);
        }
    }

    find(x){
        if(this.parent.get(x) !== x){
            this.parent.set(x, this.find(this.parent.get(x)));
        }
        return this.parent.get(x);
    }

    union(x, y){
        let rootX = this.find(x);
        let rootY = this.find(y);

        if(rootX == rootY) return true;

        if(this.size.get(rootX) > this.size.get(rootY)){
            this.parent.set(rootY, rootX);
            this.size.set(rootX, this.size.get(rootX) + this.size.get(rootY))
        } else {
            this.parent.set(rootX, rootY);
            this.size.set(rootX, this.size.get(rootY) + this.size.get(rootX))
        }
        return true;
    }
}

class Solution {
    /**
     * @param {string[]} sentence1
     * @param {string[]} sentence2
     * @param {string[][]} similarPairs
     * @return {boolean}
     */
    areSentencesSimilarTwo(sentence1, sentence2, similarPairs) {
        if(sentence1.length !== sentence2.length) return false;

        let dsu = new Union_Find();

        for(let pair of similarPairs){
            dsu.add(pair[0]);
            dsu.add(pair[1]);
            dsu.union(pair[0], pair[1]);
        }

        for(let i = 0; i < sentence1.length; i++){
            if(sentence1[i] == sentence2[i]) continue;
            
            let root1 = dsu.find(sentence1[i]);
            let root2 = dsu.find(sentence2[i]);

            if(root1 !== undefined && root2 !== undefined && root1 == root2) continue;

            return false;
        }

        return true;
    }
}






