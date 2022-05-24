// 배열 생성 방법
let array = new Array(2) // Array 클래스
console.log(array)

array = new Array(1, 2, 3) // Array 클래스
console.log(array)

//static 함수
array = Array.of(1, 2, 3)
console.log(array)

// 배열 리터럴를 통해 만들 수 있음
const anothorArray = [1, 2, 3, 4]
console.log(anothorArray)
// 전달받은 배열을 새로운 배열로 만들어줌
array = Array.from(anothorArray)
console.log(array)

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야 함
// 하지만 자바스크립트에서의 배열은 연속적으로 이어져 있지 않고
// 오브젝트와 유사함
// 자바스크립트이 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음 (Typed Collections)
array = Array.from({
  0: '안',
  1: '녕',
  length: 2,
})
console.log(array)
