function solution(arr, n) {
  console.log(arr, n);
  let lt = (rt = hap = 0);
  let answer = 0;
  while (lt < arr.length) {
    hap += arr[rt];
    console.log(hap, arr[rt]);
    if (hap <= n) {
      answer++;
    } else if (rt > arr.length || hap > n) {
      hap = 0;
    }
  }
  return answer;
}
let arr = [1, 3, 1, 2, 3];
console.log(solution(arr, 5));
