// 방법 1
// function solution(arr) {
//   let answer = 0;
//   let num = [0, 0, 0, 0, 0];
//   console.log(arr.includes("B"));
//   for (let x of arr) {
//     if (x === "A") num[0] += 1;
//     else if (x === "B") num[1] += 1;
//     else if (x === "C") num[2] += 1;
//     else if (x === "D") num[3] += 1;
//     else if (x === "E") num[4] += 1;
//   }
//   let max = 0;
//   let spell = ["A", "B", "C", "D", "E"];
//   for (let i = 0; i < num.length; i++) {
//     if (max < num[i]) {
//       max = num[i];
//       answer = spell[i];
//     }
//   }
//   return answer;
// }

// 방법 2
function solution(s) {
  let answer;
  let sH = new Map();
  for (let x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}
let arr = [
  "B",
  "A",
  "C",
  "B",
  "A",
  "C",
  "C",
  "A",
  "C",
  "C",
  "B",
  "D",
  "E",
  "D",
  "E",
];
console.log(solution(arr));
