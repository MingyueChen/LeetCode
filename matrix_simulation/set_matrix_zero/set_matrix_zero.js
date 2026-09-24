/*
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
You must do it in place, meaning do not use extra storage space.

Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
*/

/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix) {
  const rowLength = matrix.length;
  const colLength = matrix[0].length;

  let firstRowZero = false;
  let firstColZero = false;

  // 1. Check if the first row contains 0
  for (let col = 0; col < colLength; col++) {
    if (matrix[0][col] === 0) {
      firstRowZero = true;
      break;
    }
  }

  // 2. Check if the first column contains 0
  for (let row = 0; row < rowLength; row++) {
    if (matrix[row][0] === 0) {
      firstColZero = true;
      break;
    }
  }

  // 3. Use the first row and first column as markers
  for (let row = 1; row < rowLength; row++) {
    for (let col = 1; col < colLength; col++) {
      if (matrix[row][col] === 0) {
        matrix[row][0] = 0; // mark this row
        matrix[0][col] = 0; // mark this column
      }
    }
  }

  // 4. Zero marked rows
  for (let row = 1; row < rowLength; row++) {
    if (matrix[row][0] === 0) {
      for (let col = 1; col < colLength; col++) {
        matrix[row][col] = 0;
      }
    }
  }

  // 5. Zero marked columns
  for (let col = 1; col < colLength; col++) {
    if (matrix[0][col] === 0) {
      for (let row = 1; row < rowLength; row++) {
        matrix[row][col] = 0;
      }
    }
  }

  // 6. Zero the first row
  if (firstRowZero) {
    for (let col = 0; col < colLength; col++) {
      matrix[0][col] = 0;
    }
  }

  // 7. Zero the first column
  if (firstColZero) {
    for (let row = 0; row < rowLength; row++) {
      matrix[row][0] = 0;
    }
  }
}
/**
 * 
      c0 c1 c2 c3
     ┌────────────
r0   │ 1  0  0  1   ← c1、c2 被标记
r1   │ 0  1  0  1   ← r1 被标记
r2   │ 1  1  1  1
r3   │ 0  0  1  1   ← r3 被标记
 */
