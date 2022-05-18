// true : -1, 1, 'hello', 'false', []
//   - 배열은 object이기 때문에 비어있어도 true
// false : 0, -0, '', null, undefined

if (false) {
  console.log('true')
} else {
  console.log('false')
}

// 변수에 값이 할당되지 않으면 false
// 변수에 값이 할당되면 true
let num = 7

if (num) {
  console.log(num)
}

// num이 true이면 뒤에 console 값 출력
num && console.log(num)

// && 연산자를 사용하는 이유
let obj

// console.log(obj.name)

obj && console.log(obj.name)
