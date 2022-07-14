// 중복 문자 제거
function solution(str) {
  let answer = "";
  let reStr = str;
  for (let x of str) {
    let strIndex = reStr.indexOf(x);
    if (strIndex > -1) {
      answer += x;
      let word = new RegExp(x, "g");
      reStr = reStr.replace(word, "");
    }
  }
  return answer;
}
let str = "ksekkset";
console.log(solution(str));
