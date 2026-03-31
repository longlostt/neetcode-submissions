class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let stringMap = new Map();
        for(let string of strs){
            let sortedString = string.split("").sort().join("");
            if(!stringMap.has(sortedString)){
                stringMap.set(sortedString,[])
            }
            stringMap.get(sortedString).push(string)
        }
        
        return [...stringMap.values()];
    }
}
