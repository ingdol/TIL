// 퀴즈!
let num = 2
// num의 숫자가 짝수이면 짝, 홀수이면 홀을 출력하도록

// if
if (num % 2 === 0) console.log('짝')
else console.log('홀')

// ternary
num % 2 === 0 ? console.log('짝') : console.log('홀')

// 더 간결하게
let res = num % 2 === 0 ? '짝' : '홀'
console.log(res)
