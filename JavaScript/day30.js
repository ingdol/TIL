// 팰린드롬
// 방법 1
// function solution(str) {
//   const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
//   let reStr = str.split(regExp);
//   let n = Math.floor(reStr.length / 2);
//   let answer = "YES";
//   for (let i = 0; i < n; i++) {
//     let a = reStr[i].replace(/\s/, "").toLowerCase();
//     let b = reStr[reStr.length - i - 1]
//       .replace(/\s/, "")
//       .split("")
//       .reverse()
//       .join("")
//       .toLowerCase();
//     if (a !== b) return "NO";
//   }
//   return answer;
// }

// 방법 2
function solution(str) {
  let answer = "YES";

  if (
    str.replace(/[^a-z]/gi, "").toLowerCase() !==
    str
      .replace(/[^a-z]/gi, "")
      .toLowerCase()
      .split("")
      .reverse()
      .join("")
  )
    return "NO";

  return answer;
}
let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
