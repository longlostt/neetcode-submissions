class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        seqStart = set()
        setNums = set(nums)
        
        if nums == [0]:
            return 1
        if nums == []:
            return 0

        for num in nums:
            if num-1 not in setNums:
                seqStart.add(num)
                

        print(f'{seqStart} - seqStart')
        print(f'{setNums} - setNums')
        
    # Start from each start value.
    # While the next consecutive number (start + 1, start + 2, etc.) 
    # is in the set, keep counting.
    # Track the length of this streak and update maxSeq accordingly.

        maxSeq=0
        for start in seqStart:
            curMaxSeq=0
            while start in setNums:
                start+=1
                curMaxSeq+=1
                maxSeq=max(maxSeq,curMaxSeq)
                
        return maxSeq
            

            

        