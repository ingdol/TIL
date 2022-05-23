// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { }

// 무명의 함수
let add = function (a, b) {
  return a + b
}
console.log(add(1, 2))

// 화살표 함수 const name = () => { }
add = (a, b) => {
  return a + b
}
console.log(add(1, 2))

add = (a, b) => a + b
console.log(add(1, 2))
// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸

// IIFE(Immediately-Invoked Function)
;(function run() {
  console.log('실행')
})()
