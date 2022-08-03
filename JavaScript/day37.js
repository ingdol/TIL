// function solution(n, arr) {
//   let hap = 0;
//   let answer = 0;
//   for (let x = 0; x < arr.length; x++) {
//     hap = arr[x][0] / 2 + arr[x][1];
//     console.log("반값", hap);
//     for (let i = 0; i < arr.length; i++) {
//       if (x !== i) {
//         console.log(arr[i][0], arr[i][1]);
//         let arrHap = arr[i][0] + arr[i][1];
//         hap += arrHap;
//       }
//     }
//     let cnt = arr.length;
//     for (let i = 0; i < arr.length; i++) {
//       if (x !== i) {
//         let arrHap = arr[i][0] + arr[i][1];
//         if (hap > n) {
//           hap -= arrHap;
//           cnt--;
//           console.log("2번", hap, cnt);
//         }
//         if (hap === n) {
//           answer = cnt;
//           console.log("최종", hap, cnt);
//         }
//       }
//     }
//   }
//   console.log(n, arr);
//   return answer;
// }

function solution(n, arr) {
  let answer = 0;
  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < arr.length; i++) {
    let money = m - (arr[i][0] / 2 + arr[i][0]);
    let cnt = 1;
    for (let j = 0; j < arr.length; j++) {
      if (j !== i && arr[j][0] + arr[j][1] > money) break;
      if (j !== i && arr[j][0] + arr[j][1] <= money) {
        money -= arr[j][0] + arr[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
