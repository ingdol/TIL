// 격자판 최대합
function solution(arr) {
  let num = arr.length;
  let max = 0;
  let sum = [0, 0, 0, 0];
  for (let i = 0; i < arr.length; i++) {
    sum[0] = sum[1] = 0;
    for (let j = 0; j < arr.length; j++) {
      sum[0] += arr[i][j];
      sum[1] += arr[j][i];
      if (i === j) sum[2] += arr[i][j];
    }
    max = Math.max(max, sum[0], sum[1]);
    sum[3] += arr[i][--num];
  }

  max = Math.max(max, sum[2], sum[3]);
  return max;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

console.log(solution(arr));
