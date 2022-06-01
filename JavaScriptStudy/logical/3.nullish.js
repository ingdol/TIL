// Nullish Coalescing Operator
// ?? null, undefined
// || falshy한 경우 설정(할당) 0, -0, ''
let num = 0
// 내가 만약 아예 빈값일 경우만 default 주고 싶을때
console.log(num || '-1'); // num에는 0이라는 값이 들었는데 false로 간주하므로 -1이 출력
console.log(num ?? '-1'); // ??는 null, undefined만 해당하므로 0이 출력

let num2 // undefined 일 경우 
console.log(num2 ?? '-1'); // -1 출력