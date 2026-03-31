class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        seqStart = set()
        setNums = set(nums)

        for num in nums:
            if num-1 not in setNums:
                seqStart.add(num)

        maxSeq=0
        for start in seqStart:
            curMaxSeq=0
            while start in setNums:
                start+=1
                curMaxSeq+=1
                maxSeq=max(maxSeq,curMaxSeq)
        return maxSeq
            

            

        