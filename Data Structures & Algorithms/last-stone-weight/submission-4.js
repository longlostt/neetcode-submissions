class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let n = stones.length;
        stones.sort((a,b) => a - b); // last two = heaviest
        while(n > 1){
            let cur = stones.pop() - stones.pop();
            n -= 2;
            if(cur > 0){
                let l = 0
                let r = n;
                while(l < r){
                    let mid = l + Math.floor((r - l) / 2);
                    if(stones[mid] < cur){
                        l = mid + 1;
                    } else {
                        r = mid;
                    }
                }
                stones.splice(l, 0, cur);
                n++
                console.log(stones)
            }
        }
        return stones[0] || 0;
    }
}
