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
  return value.name === '🥪'
})
console.log(result)

let result2 = products.find((value) => value.name === '🥪')
console.log(result2)

// findIndex : 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
result2 = products.findIndex((value) => value.name === '🥪')
console.log(result2)

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
result2 = products.some((value) => value.name === '🥪')
// 하나라도 샌드위치가 있으면 true임
console.log(result2)

// 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
result2 = products.some((value) => value.name === '🥪')
// 샌드위치가 모든 곳에 있는게 아니면 false임
console.log(result2)

// 조건에 맞는 모든 아이템들을 새로운 배열로!
result2 = products.filter((value) => value.name === '🥪')
// 샌드위치가 있는 것들이 배열로 출력됨
console.log(result2)
