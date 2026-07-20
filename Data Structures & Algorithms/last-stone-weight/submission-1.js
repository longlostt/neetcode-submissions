class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let n = stones.length;
        let iter = 1;
        while(n > 1){
            stones.sort((a,b) => a - b); // last two = heaviest
            console.log("begin iter # " + iter , stones)
            let cur = stones.pop() - stones.pop();
            n-=2;
            if(cur > 0){
                stones.push(cur);
                n+=1;
            }
            console.log("end iter # " + iter , stones)
            iter++
        }
        return stones[0] ? stones[0] : 0
    }
}
