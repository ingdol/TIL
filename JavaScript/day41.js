// 방법 1
// function solution(arr, n) {
//   let hap = 0;
//   let res = [];
//   let answer = new Set();
//   for (let cnt = 0; cnt < arr.length; cnt++) {
//     hap = 0;
//     res = [];
//     for (let cnt2 = cnt; cnt2 < arr.length; cnt2++) {
//       if (hap < n) {
//         hap += arr[cnt2];
//         res.push(arr[cnt2]);
//       } else if (hap === n) answer.add(res);
//     }
//   }
//   return answer;
// }

// 방법 2
function solution(arr, n) {
  let lt = (rt = hap = 0);
  let newArr = arr;
  let answer = [];
  while (rt < arr.length) {
    if (hap > n) hap -= arr[lt++];
    else if (hap === n) {
      answer.push(newArr.slice(lt, rt));
      newArr = arr;
      hap += arr[rt++];
    } else hap += arr[rt++];
  }
  return answer;
}
let arr = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(arr, 6));
