class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        result = []
        for i in range(len(temperatures)):
            days = 0
            for j in range(i+1, len(temperatures)):
                if(temperatures[i] < temperatures[j]):
                    days=j-i
                    break
            result.append(days)
        return result