function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    let hap = arr[i];
    for (let j = i; j < arr.length; i++) {
      hap = arr[j] + arr[j + 1];
    }
    console.log(hap);
  }
}
let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(arr));
