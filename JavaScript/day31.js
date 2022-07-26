// 숫자만 추출
// 방법 1
// function solution(str) {
//   let answer = str.replace(/[^0-9]/gi, "");
//   let answer2 = str.replace(/[^0-9]/gi, "");
//   let x = 0;
//     while (x < answer.length) {
//       if (answer[x] === "0") answer2 = answer2.replace(/0/, "");
//       else return answer2;
//       x++;
//     }
//   return answer2;
// }

// 방법 2
// function solution(str) {
//   let answer = 0;
//   for (let x of str) {
//     if (!isNaN(x)) answer = answer * 10 + Number(x);
//   }
//   return answer;
// }

// 방법 3
function solution(str) {
  let answer = "";
  for (let x of str) {
    if (!isNaN(x)) answer += x;
  }
  return parseInt(answer);
}
let str = "g0e0000000n20T0s8eSoft";
console.log(solution(str));
