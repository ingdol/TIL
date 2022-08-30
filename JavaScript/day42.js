// 방법 1
// function solution(arr, n) {
//   console.log(arr, n);
//   let lt = (rt = hap = 0);
//   let answer = 0;
//   while (lt < arr.length) {
//     console.log(hap, rt, arr[rt]);
//     hap += arr[rt++];
//     if (hap <= n) {
//       answer++;
//     } else if (rt > arr.length || hap > n) {
//       hap = 0;
//       rt = ++lt;
//     }
//     console.log("answer", answer);
//   }
//   return answer;
// }

// 방법 2
function solution(arr, m) {
  let answer = 0,
    sum = 0,
    lt = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}
let arr = [1, 3, 1, 2, 3];
console.log(solution(arr, 5));
