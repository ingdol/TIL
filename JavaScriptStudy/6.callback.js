// 콜백함수
const add = (a, b) => a + b
const multiply = (a, b) => a * b

// 전달된 action은 콜백함수이다
// 전달된 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 래퍼런스(참조값)가 전달됨
// 그래서 함수는 고차함수안에서 필요한 순간에 호출이 나중에 됨
function calculator(a, b, action) {
  // action이라는 함수를 받음
  // 외부로부터 받는 함수를 callback 함수
  // 함수의 래퍼런스만 외부로 전달 받아 액션을 함수 내부에서 실행
  let result = action(a, b)
  console.log(result)
  return result
  // callback 함수는 고차함수 내부에서 필요한 순간에 호출이 필요할때 호출해줌
  // 나중에 다시 함수를 호출해줌 callback
}

calculator(1, 2, add)
// add를 호출한 것이 아니라 함수의 참조값만 action으로 전달함
