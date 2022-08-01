function solution(arr) {
  let answer = [];
  let ifAnswer = [];
  for (let x of arr) {
    for (let i = 0; i < x.length; i++) {
      for (let j = i; j < x.length; j++) {
        if (x[i] > x[j]) ifAnswer.push([x[i], x[j]]);
      }
    }
  }
  for (let x = 0; x < ifAnswer.length; x++) {
    let cnt = 0;
    for (let i = x + 1; i < ifAnswer.length; i++) {
      if (
        ifAnswer[x][0] === ifAnswer[i][0] &&
        ifAnswer[x][1] === ifAnswer[i][1]
      ) {
        cnt++;
      }
    }
    if (cnt === arr.length - 1) answer.push(ifAnswer[x]);
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
