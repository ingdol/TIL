// 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)

// 1번 문자열에서 2번 문자열과 아나그램이 되는 1번 문자열의 개수를 구하는 프로그램
// 부분문자열은 연속된 문자열이어야 함

// 입력예제)
// bacaAacba
// abc

// 출력예제)
// 3

// 출력설명)
// {bac}, {acb}, {cba} 3개의 부분문자열이 "abc"와 아나그램

// 나의 풀이)
function solution(s, t) {
  const arrS = [...s];
  let lt = 0;
  let rt = 0;
  let cnt = 0;
  while (lt < s.length - t.length + 1) {
    let str = "";
    let strT = t;
    while (rt < t.length) {
      if (strT.indexOf(arrS[lt + rt]) !== -1) {
        strT = strT.replace(arrS[lt + rt], "");
        str += arrS[lt + rt];
        rt++;
      } else break;
    }
    if (str.length === t.length) {
      cnt++;
      console.log(str);
    }
    rt = 0;
    lt++;
  }
  return cnt;
}
let s = "bacaAacba";
let t = "abc";
console.log(solution(s, t));
