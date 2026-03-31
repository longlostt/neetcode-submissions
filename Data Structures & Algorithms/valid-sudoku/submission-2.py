class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        wh = 9
        squareWh = 3
        for row in range(wh):
            seen = set()
            for i in range(wh):
                if board[row][i] == ".":
                    continue
                if board[row][i] in seen:
                    return False
                seen.add(board[row][i])
        for col in range(wh):
            seen = set()
            for i in range(wh):
                if board[i][col] == ".":
                    continue
                if board[i][col] in seen:
                    return False
                seen.add(board[i][col])
        for square in range(wh):
            seen = set()
            for i in range(squareWh):
                for j in range(squareWh):
                    row = (square//3) * 3 + i
                    col = (square % 3) * 3 + j
                    if board[row][col] == ".":
                        continue
                    if board[row][col] in seen:
                        return False
                    seen.add(board[row][col])

        return True
        
        



                
                   