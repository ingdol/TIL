function solution(arr, n) {
  let hapArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[i] !== arr[j] && arr[i] !== arr[j + 1]) {
        console.log(arr[i], arr[j], arr[j + 1]);
        let hap = arr[i];
        hap = hap + arr[j] + arr[j + 1];

        if (hapArr.indexOf(hap) === -1) hapArr.push(hap);
      }
    }
  }
  console.log(hapArr);
  hapArr.sort((a, b) => {
    return b - a;
  });
  return hapArr[n - 1];
}
let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(arr, 3));
