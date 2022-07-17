// 중복단어 제거
// function solution(arr) {
//   let answer;
//   answer = arr.filter((v, i) => {
//     return arr.indexOf(v) === i;
//   });
//   return answer;
// }
// let arr = ["good", "time", "good", "time", "student"];
// console.log(solution(arr));

// 큰 수 출력하기
function solution(arr) {
  let answer;
  answer = arr.filter((v, i) => {
    if (i === 0) return v;
    return arr[i] > arr[i - 1];
  });
  return answer;
}
let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
