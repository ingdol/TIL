// 뒤집은 소수
function isPrime(n) {
  if (n === 1) return false;
  for (let i = 2; i < Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let n = parseInt(x.toString().split("").reverse().join(""));
    if (isPrime(n)) answer.push(n);
  }
  return answer;
}
let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
