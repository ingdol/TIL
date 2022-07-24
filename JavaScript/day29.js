// 회문문자열
// 방법 1
// function solution(str) {
//   let answer = "";
//   let newStr = str.toLowerCase();
//   let arr = [];
//   for (let s of newStr) arr.push(s);
//   for (let s = 0; s < newStr.length; s++) {
//     if (arr.pop() !== newStr[s]) answer = "NO";
//     else answer = "YES";
//   }
//   return answer;
// }

// 방법 2
// function solution(str) {
//   let answer = "YES";
//   let n = Math.floor(str.length / 2);
//   for (let x = 0; x < n; x++) {
//     if (str[x] !== str[str.length - x - 1]) return "NO";
//   }
//   return answer;
// }

// 방법 3
function solution(str) {
  let answer = "YES";
  str = str.toLowerCase();
  if (str.split("").reverse().join("") !== str) return "NO";
  return answer;
}

let str = "gooG";
console.log(solution(str));
