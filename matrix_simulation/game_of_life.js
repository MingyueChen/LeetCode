/**

| 当前|  周围活细胞 | 下一轮 |
| 1  |   < 2       | 0 |
| 1  |  2 or 3     | 1 |
| 1  |   > 3       | 0 |
| 0  |   = 3       | 1 |
| 0  |   other     | 0 |

There are 8 neighbours aounrd one cell, their current status decides the next status of this cell.
↖  ↑  ↗
←  X  →
↙  ↓  ↘

const directions = [
    [-1, -1],  // ↖
    [-1,  0],  // ↑
    [-1,  1],  // ↗
    [ 0, -1],  // ←
    [ 0,  1],  // →
    [ 1, -1],  // ↙
    [ 1,  0],  // ↓
    [ 1,  1]   // ↘
];

Given the current state of the board (either 0 or 1), update the board to reflect its next state.

Note that you do not need to return anything.
*/
function gameOfLife(board) {
  const rowLength = board.length;
  const colLength = board[0].length;

  // copy the original board
  const copyBoard = board.map((row) => [...row]);

  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  // go through each cell
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      //calculate the living neighbor
      let livingNeighbor = 0;
      for (const [rowDir, colDir] of directions) {
        const neighborRow = row + rowDir;
        const neighborCol = col + colDir;
        if (
          neighborRow >= 0 &&
          neighborRow < rowLength &&
          neighborCol >= 0 &&
          neighborCol < colLength
        ) {
          if (copyBoard[neighborRow][neighborCol] === 1) {
            livingNeighbor++;
          }
        }
      } // end of calculating the living neighbor

      // update board based on requirements
      // when the current cell is 1, change status to 0 when its number of living neighbor is not 2 or 3
      if (copyBoard[row][col] === 1) {
        if (livingNeighbor < 2 || livingNeighbor > 3) {
          board[row][col] = 0;
        }
      }
      // when the current cell is 0, change status to 1 when its number of living neighbor is 3
      else {
        if (livingNeighbor === 3) {
          board[row][col] = 1;
        }
      }
    }
  }
}
