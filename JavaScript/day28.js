// 봉우리
function solution(arr) {
  let n = arr.length;
  let cnt = [];
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (j - 1 > -1 && i - 1 > -1 && j + 1 < n && i + 1 < n) {
        max = Math.max(
          arr[i][j],
          arr[i - 1][j],
          arr[i][j + 1],
          arr[i + 1][j],
          arr[i][j - 1]
        );
      }

      if (max === arr[i][j]) cnt.push(max);
    }
  }
  console.log(cnt);
}
let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
