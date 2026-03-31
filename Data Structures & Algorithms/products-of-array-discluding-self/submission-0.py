class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        output = []

        if not nums:
            return []
        
        curVal=1
        for i in range(len(nums)):
            for j in range(len(nums)):
                if i != j:
                    curVal *= nums[j]            
            output.append(curVal)
            curVal = 1
        return output  

        