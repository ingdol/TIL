// 동등 비교 관계 연산자 (Equality operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름
console.log(2 == 2)
console.log(2 != 2)
console.log(2 != 3)
console.log(2 == 3)
console.log(2 == '2')
console.log(2 === '2') // ✨
console.log(true == 1)
console.log(true === 1)
console.log(false == 0)
console.log(false === 0)

// obj1의 메모리 주소값 : 0X111
const obj1 = {
  name: 'js',
}
// obj1의 메모리 주소값 : 0X112
const obj2 = {
  name: 'js',
}

// 오브젝트는 값을 담고 있는 것이 아니라
// 메모리 주소를 담고 있기 때문에
// 타입은 object지만 서로 다른 메모리 주소값을 가리키기 때문에 값 자체가 다름
// ==, === 둘다 false
console.log(obj1 == obj2)
console.log(obj1 === obj2)
console.log(obj1.name == obj2.name) // 동일한 값
console.log(obj1.name === obj2.name) // 동일한 문자열

let obj3 = obj2 // obj2의 주소값을 할당
// 동일한 메모리 주소를 가짐
console.log(obj3 == obj2)
console.log(obj3 === obj2)
