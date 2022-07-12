// A를 #으로
// function solution(str) {
//   let answer = str.replace(/A/g, "#");
//   return answer;
// }

// let str = "BANANA";
// console.log(solution(str));

// 문자 찾기
// function solution(str, word) {
//   let answer = str.split(word).length - 1;

//   return answer;
// }

// let str = "COMPUTERPROGRAMMING";
// let word = "R";
// console.log(solution(str, word));

// 대문자 찾기
// function solution(str) {
//   let answer = 0;
//   for (let x of str) {
//     if (x === x.toUpperCase()) answer++;

//     // 아스키 코드로 찾기
//     // let num = x.charCodeAt();
//     // if (num >= 65 && num <= 90) answer++;
//   }

//   return answer;
// }

// let str = "KoreaTimeGood";
// console.log(solution(str));

// 대문자로 통일
// function solution(str) {
//   let answer = str.toUpperCase();

//   return answer;
// }

// let str = "ItisTimeToStudy";
// console.log(solution(str));

// 대소문자 변환
function solution(str) {
  let answer = "";

  for (let s of str) {
    // let num = s.charCodeAt();
    // if (num >= 65 && num <= 90) {
    //   s = s.toLowerCase();
    // } else {
    //   s = s.toUpperCase();
    // }
    if (s === s.toUpperCase()) s = s.toLowerCase();
    else s = s.toUpperCase();
    answer += s;
  }

  return answer;
}

let str = "StuDY";
console.log(solution(str));
