/**
Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1: (see picture spiral_matix)
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
*/

function spiralOrder(matrix) {
  const result = [];

  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let left = 0;

  while (top <= bottom && left <= right) {
    // go through top
    for (let col = left; col <= right; col++) {
      result.push(matrix[top][col]);
    }
    top++;

    // go through right
    for (let row = top; row <= bottom; row++) {
      result.push(matrix[row][right]);
    }
    right--;

    // go through bottom
    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        result.push(matrix[bottom][col]);
      }
      bottom--;
    }

    // go through left
    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        result.push(matrix[row][left]);
      }
      left++;
    }
  } // end of while loop
  return result;
}

//解题思路：剥洋葱：每绕一圈，就把外面这一层去掉，四条边不断往里面缩。
