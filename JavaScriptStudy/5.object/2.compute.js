const obj = {
  name: '엘리',
  age: 20,
}

// 코딩하는 시점에, 정적으로 접근이 확장됨
// 정적 : 변하지 않는
obj.name
obj.age

// 동적으로 속성에 접근하고 싶을때 대괄호 표기법 사용
// 동적 : 끊임 없이 변하는
function getValue(obj, key) {
  return obj[key]
}

console.log(getValue(obj, 'name'))

// 동적으로 추가
function addKey(obj, key, value) {
  obj[key] = value
}
addKey(obj, 'job', 'engineer')
console.log(obj)

// 동적으로 삭제
function deleteKey(obj, key) {
  delete obj[key]
}
deleteKey(obj, 'job')
console.log(obj)
