// 객체
// - 복합 데이터
// - 서로 연관있는 속성과 행동을 묶어주기 위해
// - 객체는 순수 데이터 객체로 데이터만 담을 수 있고
// - 상태와 행동 객체로 함수(메소드)도 담을 수 있음
// - 밀접하게 관련있는 상태와 행동을 객체로 묶어야 함

// object literal { key: value }
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체 (함수)
let apple = {
  name: 'apple',
  hello: 'hi',
  // 문자열은 특수문자 사용 가능 'hello-hi'
  0: 1,
  ['hello-bye']: 'hi',
}

// 속성, 데이터에 접근하기 위해서는
console.log(apple.name) // 마침표 표기법 dot notation
console.log(apple['hello-bye']) // 대괄호 표기법 bracket notation
// 대괄호일 경우 문자열이여야 함

// 속성 추가
apple.emoji = '🍎'
console.log(apple)
console.log(apple.emoji)
console.log(apple['emoji'])

// 속성 삭제
delete apple.emoji
console.log(apple)
