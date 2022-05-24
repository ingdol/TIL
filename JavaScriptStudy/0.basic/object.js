// c
// object

let obj = {
  name: 'test',
  age: 5,
}

obj = {
  name: 'test2',
  age: 7,
}

console.log(obj.name)

let obj2 = obj // obj2에 obj를 할당 -> obj2에는 새로운 메모리 공간이 생김
// 변수에 할당할 때는 변수에 들어있는 주소값이 복사되어 할당됨
// 123이라는 주소값을 이용해서 name을 가리킴
console.log(obj2.name)

obj.name = 'change'
console.log('-------')
console.log(obj.name)
console.log(obj2.name)

const objC = {
  name: 'test',
  age: 5,
}

// const의 object를 전체 바꾸는 것은 불가능
// objC 자체는 래퍼런스로 잠겨 있기 때문
// objC = {
//     name: 'change',
//     age: 10,
//   }

//objC.name으로 value 값을 바꾸는 것은 가능
// objC 자체가 아닌 래퍼런스가 가리키는 다른 공간을 바꾸는 것이기 때문
objC.test = 'change'
console.log(objC)
