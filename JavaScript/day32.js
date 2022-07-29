// 짧은 문자 거리
// function solution(str, s) {
//   let arr = [];
//   for (let x = 0; x < str.length; x++) {
//     if (str[x] === s) {
//       arr[x] = 0;
//       let zero = 0;
//       for (let l = x - 1; l >= 0; l--) {
//         if (arr[l] !== 0) arr[l] = ++zero;
//         else break;
//       }
//     }
//   }
//   for (let x = 0; x < str.length; x++) {
//     if (str[x] === s) {
//       let zero = 1;
//       for (let l = x + 1; l <= str.length; l++) {
//         if (arr[l] !== 0 && zero <= arr[l + 1]) arr[l] = zero++;
//         else break;
//       }
//     }
//   }
//   return arr;
// }

function solution(str, s) {
  let arr = [];
  let p = 1000;
  for (let x of str) {
    if (x === s) {
      p = 0;
      arr.push(p);
    } else {
      p++;
      arr.push(p);
    }
  }
  p = 1000;
  for (let x = str.length - 1; x >= 0; x--) {
    if (str[x] === s) p = 0;
    else {
      p++;
      arr[x] = Math.min(arr[x], p);
    }
  }
  return arr;
}
let str = "teachermode";
let s = "e";
console.log(solution(str, s));
