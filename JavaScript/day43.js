// 방법 1
// function solution(arr, n) {
//   let answer = (hap = lt = rt = 0);
//   while (lt <= arr.length - n) {
//     if (rt < n) {
//       hap += arr[lt + rt];
//       rt++;
//     } else {
//       if (hap > answer) answer = hap;
//       lt++;
//       rt = 0;
//       hap = 0;
//     }
//   }
//   return answer;
// }

// 방법 2
function solution(arr, m) {
  let answer,
    sum = 0;
  for (let i = 0; i < m; i++) sum += arr[i];
  answer = sum;
  for (let i = m; i < arr.length; i++) {
    sum += arr[i] - arr[i - m];
    answer = Math.max(answer, sum);
  }
  return answer;
}
let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(arr, 3));
