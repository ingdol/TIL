// forEach문
a = [10, 11, 12, 13, 14, 15];
a.forEach(
  function (v, i) {
    console.log(v, i, this);
  },
  [1, 2]
);

// map 함수
b = [10, 11, 12, 13, 14, 15];
let answer = b.map((x, index) => {
  //   return x * x;
  if (x % 2 === 0) return x;
  // map은 기존 배열의 길이를 그대로 가져가기 때문에
  // 조건식에 맞지 않는 값은 undefined
});
console.log(answer);

// filter 함수
c = [10, 11, 12, 13, 14, 15];
let answerC = c.filter((x, index) => {
  return x % 2 === 0;
  // 참인 값만 리턴
});
console.log(answerC);

// reduce 함수 : 합을 구할 때
d = [10, 11, 12, 13, 14, 15];
let answerD = d.reduce((acc, value) => {
  return acc + value;
  // acc는 계속 더한 값
  // 30은 초기값
}, 30);
console.log(answerD);

// 일곱난쟁이
function solution(arr) {
  let answer = arr;
  let sum = arr.reduce((acc, value) => {
    return acc + value;
  });
  console.log(sum);
  let store = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
      let twoSum = arr[i] + arr[j];
      if (sum - twoSum === 100) {
        arr.splice(i, 2);
      }
    }
  }
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
