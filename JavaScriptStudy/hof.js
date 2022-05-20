const fruits = ['🍌', '🍒', '🍎', '🍉']

// 귀찮은 for문
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}

// 배열을 빙글 빙글 돌면서 원하는 것(콜백함수)을 할 때
fruits.forEach(function (value, index, array) {
  console.log('------------------')
  console.log(value)
  console.log(index)
  console.log(array)
})

fruits.forEach(function (value) {
  console.log(value)
})

fruits.forEach((value) => console.log(value))

// 조건에 맞는(콜백함수) 아이템을 찾을때
// find: 제일 먼저 조건에 맞는 아이템을 반환
const item1 = { name: '🥛', price: 2 }
const item2 = { name: '🥪', price: 3 }
const item3 = { name: '🥨', price: 1 }
const products = [item1, item2, item3, item2]
const result = products.find((value) => {
  console.log(value)
  return value.name === '🥪'
})
console.log(result)

let result2 = products.find((value) => value.name === '🥪')
console.log(result2)

// findIndex : 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
result2 = products.findIndex((value) => value.name === '🥪')
console.log(result2)

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
result2 = products.some((value) => {
  console.log(value)
  return value.name === '🥪'
})
// 하나라도 샌드위치가 있으면 true임
console.log(result2)

// 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
result2 = products.every((value) => {
  console.log(value)
  return value.name === '🥪'
})
// 샌드위치가 한 곳이라도 없으면 false임
console.log(result2)

// 조건에 맞는 모든 아이템들을 새로운 배열로!
result2 = products.filter((value) => {
  console.log(value)
  return value.name === '🥪'
})
// 샌드위치가 있는 것들이 배열로 출력됨
console.log(result2)

console.clear()

// Map 배열의 아이템을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성
// 아이템 하나씩 연결 => 맵핑
const nums = [1, 2, 3, 4, 5]
let res = nums.map((item) => item * 2)
// let res = nums.map((item) => {
//   console.log(item)
//   return item * 2
// })
// 각각의 item을 받아와서 새로운 item으로 리턴
console.log(res)

res = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2
  } else {
    return item
  }
})

console.log(res)

// flatmap
res = nums.map((item) => [1, 2])
console.log(res)

res = nums.flatMap((item) => [1, 2])
console.log(res)

res = ['dream', 'coding'].map((text) => text.split(''))
console.log(res)

res = ['dream', 'coding'].flatMap((text) => text.split(''))
console.log(res)

// sort 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const texts = ['hi', 'abc']
texts.sort()
console.log(texts)

const numbers = [0, 5, 4, 2, 1, 10]
// numbers.sort()
// console.log(numbers)
numbers.sort((a, b) => {
  // a - b : 양수이면 a가 큼
  // 양수이면 자리 바꿈
  // a - b : 음수이면 b가 큼
  return a - b
})
console.log(numbers)

// reduce 배열의 요소들을 접어서(더해서) 접어서(더해서) 값을 하나로
res = [1, 2, 3, 4, 5].reduce((sum, value) => {
  // sum : value들이 더해진 값
  // value : 더할 값
  sum += value
  return sum
}, 0)
// sum을 초기화시킬 수 있음
// 초기값 : 0

console.log(res)

res = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0)

console.log(res)
