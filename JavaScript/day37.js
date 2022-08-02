function solution(n, arr) {
  let hap = 0;
  let answer = 0;
  for (let x = 0; x < arr.length; x++) {
    hap = arr[x][0] / 2 + arr[x][1];
    console.log("반값", hap);
    for (let i = 0; i < arr.length; i++) {
      if (x !== i) {
        console.log(arr[i][0], arr[i][1]);
        let arrHap = arr[i][0] + arr[i][1];
        hap += arrHap;
      }
    }
    let cnt = arr.length;
    for (let i = 0; i < arr.length; i++) {
      if (x !== i) {
        let arrHap = arr[i][0] + arr[i][1];
        if (hap > n) {
          hap -= arrHap;
          cnt--;
          console.log("2번", hap, cnt);
        }
        if (hap === n) {
          answer = cnt;
          console.log("최종", hap, cnt);
        }
      }
    }
  }
  console.log(n, arr);
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
