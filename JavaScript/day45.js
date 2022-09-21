function solution(str1, str2) {
  let answer;
  let sH = new Map();
  let hS = new Map();
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let y of str2) {
    if (hS.has(y)) hS.set(y, hS.get(y) + 1);
    else hS.set(y, 1);
  }
  let len = 0;
  for (let [key1, val1] of sH) {
    for (let [key2, val2] of hS) {
      if (key1 === key2) {
        if (val1 === val2) {
          len++;
        }
      }
    }
  }
  if (str1.length === len) answer = true;
  else answer = false;
  console.log(sH, hS);
  return answer;
}
let str1 = "AbaAeCe";
let str2 = "baeeACA";
console.log(solution(str1, str2));
