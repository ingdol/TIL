function solution(n) {
  let arr = Array.from({length: n+1}, ()=> 0)
  arr[0] = 1
  arr[1] = 2
  for(let i = 2; i < n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1]
  }
  return arr[n - 1]
}
console.log(solution(7));
