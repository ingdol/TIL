// Set
const set = new Set([1, 2, 3])
console.log(set)

// 사이즈 확인
console.log(set.size)

// 존재하는지 확인
console.log(set.has(2))
console.log(set.has(6))

// 순회
set.forEach((item) => console.log(item))
for (const value of set.values()) {
  console.log(value)
}

// 추가
set.add(6)
console.log(set)
// set에 있는 것을 추가하면 추가가 안됨
// set은 중복이 안됨
set.add(6)
console.log(set)

// 삭제
set.delete(6)
console.log(set)

// 전부 삭제
set.clear()
console.log(set)

// 오브젝트 세트
const obj1 = { name: '🍎', price: 8 }
const obj2 = { name: '🍌', price: 5 }
const objs = new Set([obj1, obj2])
console.log(objs)

// 퀴즈
obj1.price = 10 // obj1의 price 변경
objs.add(obj1) // 변경된 obj1을 objs에 추가하면
console.log(objs) // objs에 중복해서 안생김

// 퀴즈
const obj3 = { name: '🍌', price: 10 }
const obj4 = { name: '🍌', price: 10 }
const obj5 = obj3
console.log(obj3 === obj4)
console.log(obj3 === obj5)
// 새로운 object의 주소값을 만듦
objs.add(obj3) // 같은 내용이여도 obj3는 다른 주소값으로 objs에 추가됨
console.log(objs)
objs.add(obj4)
console.log(objs)
objs.add(obj5)
console.log(objs)

obj3.price = 3
console.log(objs)
