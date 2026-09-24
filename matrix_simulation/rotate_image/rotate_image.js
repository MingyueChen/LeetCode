/**
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
DO NOT allocate another 2D matrix and do the rotation.

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
*/
function rotate(matrix) {
  const matrixLength = matrix.length;

  // Flip the matrix upside down
  // rows change position
  for (let top = 0, bottom = matrixLength - 1; top < bottom; top++, bottom--) {
    [matrix[top], matrix[bottom]] = [matrix[bottom], matrix[top]];
  }

  //Transpose: flip the matrix along the top-left/bottom-right diagonal
  //elements change position
  for (let row = 0; row < matrixLength; row++) {
    for (let col = row + 1; col < matrixLength; col++) {
      [matrix[row][col], matrix[col][row]] = [
        matrix[col][row],
        matrix[row][col],
      ];
    }
  }
}
/*
Time: O(n²)
Space: O(1)

        顺时针旋转 90°
                ↓
      原来的每一列倒过来变成一行
                ↓
       ↓                  ↓
   顺序倒过来          列变成行
       ↓                  ↓
   上下翻转            Transpose
*/
