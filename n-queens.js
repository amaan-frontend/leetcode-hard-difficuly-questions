var solveNQueens = function (n) {
    const result = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    function isSafe(row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') {
                return false;
            }
        }
…                board[row][col] = '.';
            }
        }
    }

    solve(0);
    return result;
};

