function solution(str) {
  let answer = "";
  let newStr = str.toLowerCase();
  let arr = [];
  for (let s of newStr) arr.push(s);
  for (let s = 0; s < newStr.length; s++) {
    if (arr.pop() !== newStr[s]) answer = "NO";
    else answer = "YES";
  }
  return answer;
}

let str = "gooG";
console.log(solution(str));
