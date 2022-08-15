// 방법 1
// function solution(arr1, arr2) {
//   let answer = new Set();
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) answer.add(arr1[i]);
//     }
//   }
//   answer = Array.from(answer).sort((a, b) => a - b);
//   return answer;
// }

// 방법 2
function solution(arr1, arr2) {
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  console.log(arr1, arr2);
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      answer.push(arr1[i++]);
      j++;
    } else if (arr1[i] < arr2[j]) {
      console.log("작음", arr1[i], arr2[j]);
      i++;
    } else {
      console.log("큼", arr1[i], arr2[j]);
      j++;
    }
  }
  return answer;
}
let arr1 = [1, 3, 9, 5, 2];
let arr2 = [3, 2, 5, 7, 8];
console.log(solution(arr1, arr2));
