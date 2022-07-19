// 점수계산
// function solution(arr) {
//   let num = 0;
//   let sum = 0;
//   for (let x of arr) {
//     if (x === 1) {
//       num++;
//       sum += num;
//     } else {
//       num = 0;
//     }
//   }
//   return sum;
// }
// let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
// console.log(solution(arr));

// 등수 구하기
function solution(arr) {
  //   let answer = [];
  //   let num = 1;
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr.length; y++) {
      if (arr[x] < arr[y]) answer[x]++;
    }
  }
  return answer;
}
let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
