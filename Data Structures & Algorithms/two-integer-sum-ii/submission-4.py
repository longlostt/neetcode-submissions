class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        nums = []
        for number in numbers:
            nums.append(number)
        print(nums)

        for num in nums:
            for i in nums:
                if num + i == target:
                    return [nums.index(num)+1,nums.index(i)+1]
