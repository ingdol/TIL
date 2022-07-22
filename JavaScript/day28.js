// 봉우리
// 방법 1
// function solution(arr) {
//   let n = arr.length;
//   let cnt = [];
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       let arr1 = arr[i][j];
//       let arr2 = (arr3 = arr4 = arr5 = 0);
//       if (i - 1 > -1) arr2 = arr[i - 1][j];
//       if (j + 1 < n) arr3 = arr[i][j + 1];
//       if (i + 1 < n) arr4 = arr[i + 1][j];
//       if (j - 1 > -1) arr5 = arr[i][j - 1];
//       max = Math.max(arr1, arr2, arr3, arr4, arr5);

//       if (max === arr1) cnt.push(max);
//     }
//   }
//   return cnt.length;
// }

// 방법 2
function solution(arr) {
  let n = arr.length;
  let cnt = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (
          nx >= 0 &&
          nx < n &&
          ny < n &&
          ny >= 0 &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) cnt++;
    }
  }
  return cnt;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
