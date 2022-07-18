// 보이는 학생
// function solution(arr) {
//   let max = 0;
//   let cnt = 0;
//   for (let x of arr) {
//     if (max < x) {
//       max = x;
//       cnt++;
//     }
//   }
//   return cnt;
// }
// let arr = [130, 135, 148, 140, 145, 150, 150, 153];
// console.log(solution(arr));

// 가위 바위 보
function solution(arrA, arrB) {
  let answer = [];
  for (let i in arrA) {
    // let num = arrA[i] - arrB[i];
    // if (num === 1 || num === -2) answer.push("A");
    // else if (num === 2 || num === -1) answer.push("B");
    // else answer.push("D");
    if (arrA[i] === arrB[i]) answer.push("D");
    else if (arrA[i] === 1 && arrB[i] === 3) answer.push("A");
    else if (arrA[i] === 2 && arrB[i] === 1) answer.push("A");
    else if (arrA[i] === 3 && arrB[i] === 2) answer.push("A");
    else answer.push("B");
  }
  return answer;
}
let arrA = [2, 3, 3, 1, 3];
let arrB = [1, 1, 2, 2, 3];
console.log(solution(arrA, arrB));
