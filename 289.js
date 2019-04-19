/**
 * 289. Game of Life
 * According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
 * Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):
 * Any live cell with fewer than two live neighbors dies, as if caused by under-population.
 * Any live cell with two or three live neighbors lives on to the next generation.
 * Any live cell with more than three live neighbors dies, as if by over-population..
 * Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
 * Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.
 * Example:
 * Input: 
[
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]
Output: 
[
  [0,0,0],
  [1,0,1],
  [0,1,1],
  [0,1,0]
]
*/

/**
 * 本题的思路非常溜，主要是对不同的情况进行标注，从而可以同时表面原来的状态和现在的状态
 * 此外通过数组来表明下一步操作的位置也是极好的
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const m = board.length;
    const n = m ? board[0].length : 0;
    const dx = [-1, -1, -1, 0, 1, 1, 1, 0];
    const dy = [-1, 0, 1, 1, 1, 0, -1, -1]
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let count = 0;
            for (let k = 0; k < dx.length; k++) {
                const x = i + dx[k];
                const y = j + dy[k];
                if (x >= 0 && x < m && y >= 0 && y < n) {
                    if (board[x][y] === 1 || board[x][y] === 2) {
                        count++;
                    }
                }
            } 
            if (board[i][j] && (count < 2 || count > 3)) {
                board[i][j] = 2;
            }
            if (!board[i][j] && count === 3) {
                board[i][j] = 3;
            }
        }
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            board[i][j] = board[i][j] % 2;
        }
    }
};