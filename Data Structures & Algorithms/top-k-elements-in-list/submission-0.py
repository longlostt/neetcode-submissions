class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        x = {}
        output = []
        if not nums:
            return 0

        for i in nums:
            x[i] = x.get(i,0) + 1
        
        count = 0
        while count < k:
            output.append((max(x, key=x.get)))
            x[max(x, key=x.get)] = 0
            count += 1    
        
        return output
        