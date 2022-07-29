// 5. 문자열 압축
// 방법 1
// function solution(str) {
//   let answer = "";
//   let reStr = str;
//   for (let x of str) {
//     if (reStr.indexOf(x) !== -1) {
//       let num = reStr.length;
//       let newS = new RegExp(x, "gi");
//       reStr = reStr.replace(newS, "");

//       let leng = num - reStr.length;
//       if (leng === 1) {
//         answer += x;
//       } else {
//         answer += x;
//         answer += leng;
//       }
//     }
//   }

//   return answer;
// }

// 방법 2
function solution(str) {
  let answer = "";

  let cnt = 1;
  for (let x = 0; x < str.length; x++) {
    if (str[x] === str[x + 1]) cnt++;
    else {
      answer += str[x];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
  return answer;
}
let str = "KKHSSSSSSSE";
console.log(solution(str));
