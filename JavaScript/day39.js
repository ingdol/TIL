// 두 배열 합치기
// 방법 1
// function solution(arr1, arr2) {
//   for (let x of arr2) {
//     arr1.push(Number(x));
//   }
//   arr1.sort((a, b) => a - b);
//   return arr1;
// }

// 방법 2
// function solution(arr1, arr2) {
//   let answer = [];
//   let n = arr1.length;
//   let m = arr2.length;
//   let cnt = 0;
//   let cnt2 = 0;

//   while (cnt < n) {
//     if (arr1[cnt] <= arr2[cnt2]) {
//       answer.push(arr1[cnt]);
//       cnt++;
//     } else {
//       answer.push(arr2[cnt2]);
//       cnt2++;
//     }
//   }
//   while (cnt2 < m) {
//     answer.push(arr2[cnt2]);
//     cnt2++;
//   }

//   return answer;
// }

// 방법 3
function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);
}
let arr1 = [1, 3, 5];
let arr2 = [2, 3, 6, 7, 9];
console.log(solution(arr1, arr2));
