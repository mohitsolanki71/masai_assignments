let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

let N = matrix.length;
let M = matrix[0].length;

function spiralTransverse(N, M, matrix) {
  var top = 0;
  var bottom = N - 1;
  var left = 0;
  var right = M - 1;
  var count = 0;
  var output = [];
  while (count < N * M) {
    for (var i = bottom; i >= top && count < N * M; i--) {
      output.push(matrix[i][left]);
      count++;
    }
    left++;

    for (var i = left; i <= right && count < N * M; i++) {
      output.push(matrix[top][i]);
      count++;
    }
    top++;

    for (var i = top; i <= bottom && count < N * M; i++) {
      output.push(matrix[i][right]);
      count++;
    }
    right--;

    for (var i = right; i >= left && count < N * M; i--) {
      output.push(matrix[bottom][i]);
      count++;
    }
    bottom--;
  }
  console.log(output);
}

spiralTransverse(N, M, matrix);
