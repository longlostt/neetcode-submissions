class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = re.sub(r'[^A-Za-z0-9]','',s).lower()
        for a,b in zip(s,s[::-1]):
            if a!=b:
                return False
        return True