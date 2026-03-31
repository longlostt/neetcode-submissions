class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let comps = new Map();
        for(let i = 0; i < nums.length; i++){
            let comp = target - nums[i];
            if(comps.has(comp)){
                
                return [i, comps.get(comp)]
            } 
            comps.set(nums[i],i);
        }
    }
}
