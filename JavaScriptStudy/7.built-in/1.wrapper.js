// 래퍼 객체 (Wrapper Object)
// 원시값을 필요에 따라서 관련된 빌트인 객체로 변환함
const number = 123 // number 원시타입

// 원시타입에 .을 사용해 함수를 사용이 가능함
// number 원시타입을 감싸고 있는 Number 객체로 감싸짐

console.log(number.toString())
console.log(number) // 원시타입

const text = 'text' // string 문자열 원시타입
console.log(text) // 문자열 원시타입
console.log(text.length) //string 객체가 됨

// 필요에 따라 원시타입을 한단계 감싸는 wrapper 객체로 감싸지는 기능이 있음
