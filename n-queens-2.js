var totalNQueens = function (n) {
    let count = 0;
    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    function isSafe(row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') {
                return false;
            }
        }
…        }
    }

    solve(0);
    return count;
};

