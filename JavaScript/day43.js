function solution(arr, n) {
  let answer = (hap = lt = rt = 0);
  while (lt <= arr.length - n) {
    if (rt < n) {
      hap += arr[lt + rt];
      rt++;
    } else {
      if (hap > answer) answer = hap;
      lt++;
      rt = 0;
      hap = 0;
    }
  }
  return answer;
}
let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(arr, 3));
