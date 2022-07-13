// 가장 긴 문자열
// function solution(num, arr) {
//   let max = "";
//   for (let x of arr) {
//     if (x.length > max.length) {
//       max = x;
//     }
//   }
//   return max;
// }

// let num = 5;
// let arr = ["teacher", "time", "student", "beautiful", "good"];
// console.log(solution(num, arr));

// 가운데 문자 출력
function solution(str) {
  let answer;
  let between = Math.floor(str.length / 2);
  if (str.length % 2 === 1) {
    // answer = str[between];
    // answer = str.substring(between, between + 1);
    answer = str.substr(between, 1);
  } else {
    // answer = str[between - 1] + str[between];
    // answer = str.substring(between - 1, between + 1);
    answer = str.substr(between - 1, 2);
  }
  return answer;
}

let str = "good";
console.log(solution(str));
