// 자릿수의 합
function solution(arr) {
  let hap = 0;
  let max = 0;
  let answer = 0;
  for (let x of arr) {
    hap = x
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);
    // for (let n of String(x)) {
    //   hap += Number(n);
    // }
    max = Math.max(max, hap);
    if (max === hap && x > answer) {
      answer = x;
    }
    hap = 0;
  }
  return answer;
}
let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));
