function solution(str, s) {
  let arr = [];
  for (let x = 0; x < str.length; x++) {
    if (str[x] === s) {
      arr[x] = 0;
      console.log(x);
      let zero = 0;
      for (let l = x - 1; l >= 0; l--) {
        if (arr[l] !== 0) arr[l] = ++zero;
        else break;
      }
      //   for (let r = x + 1; r <= str.length; r++) {
      //     if (arr[r] > ++zero) arr[r] = ++zero;
      //     else break;
      //   }
    }
    console.log(arr);
  }
  let reArr = arr;
  for (let x = 0; x < arr.length; x++) {
    console.log("여기", x, arr[x] === 0);
    if (arr[x] === 0) {
      let zero = 0;
      for (let r = x + 1; r < arr.length; r++) {
        console.log("출력중", arr[r]);
        if (arr[r] !== zero) {
          arr[r] = ++zero;
          console.log(zero);
        } else break;
        // else break;
      }
      console.log(arr);
    }
    // if (arr[x] === 0) {
    //   let zero = 0;
    //   for (let r = x + 1; r <= arr.length; l++) {
    //     console.log(r);
    //     if (arr[r] > ++zero) arr[r] = ++zero;
    //     else break;
    //   }
    //   console.log(arr);
    // }
  }
  return answer;
}
let str = "teachermode";
let s = "e";
console.log(solution(str, s));
