// 1. 함수 선언
// function doSomething(/* 인자 */) {
//     // 코드를 작성하는 부분
// }

// 리턴하지 않는 함수
// function doSomething() {
//   console.log('doSomething 함수가 실행됨')
//   //   console.log('hello')
//   return 'hello'
// }

// 값을 리턴하는 함수
// - 인자를 받아와서 코드를 수행
// - 인자에 타입 선언 안해도 됨
//   - 자바스크립은 타입이 없음
// - 어떤 값이든 값을 받아오고 값은 변수를 이용해서 함수에 접근
// function add(a, b) {
//   const sum = a + b

//   // return을 이용해 값을 전달
//   console.log('add 함수 실행됨')
//   return sum
// }

// // <함수를 인자로 전달>
// function doSomething2(add) {
//   // add라는 함수를 받아옴 -> add 함수가 들어감
//   console.log('doSomething2 함수가 실행됨')
//   console.log(add) // add 그대로 출력
// }

// 2. 함수 호출
// doSomething()

// 호출만 했기 때문에 아무것도 일어나지 않음
// add(1, 2)
// const result = add(1, 2)
// result에 선언함과 동시에 값을 할당함
// 근데 값에 함수가 있으니까 함수를 먼저 호출하고
// 함수의 인자값인 1과 2를 전달하면서 add 함수를 호출하고
// a와 b의 값이 더해진 값이 sum에 할당됨
// sum의 값이 리턴됨
// console.log(result)

// add를 그대로 전달
// doSomething2(add) // 함수 자체가 전달됨

// 실수하는 방법
// 함수를 바로 호출해버림
// doSomething2를 호출하기 전에 add()를 호출함
// - add라는 함수가 바로 실행되면서 add 함수 코드가 실행됨
// add 함수의 코드블럭이 실행됨
// 숫자가 아닌 값들이 더해지므로 NaN이 뜸

// <add 함수 이용하기>
function add(a, b) {
  const sum = a + b
  console.log('add 함수 실행됨')
  return sum
}
// <함수를 인자로 전달>
function doSomething(param) {
  console.log('doSomething 함수가 실행됨')
  console.log(param)
  const result = add(2, 3)
  console.log(result)
}
doSomething(add)

// 함수명만 사용해서 함수 부르는 법
const addFun = add // 함수 명으로 선언
console.log(addFun)
// addFun도 add 함수처럼 사용하기 위해 인자 쓰면 됨
const addFunResult = addFun(1, 2)
console.log(addFunResult)
