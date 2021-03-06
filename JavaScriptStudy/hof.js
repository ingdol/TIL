const fruits = ['๐', '๐', '๐', '๐']

// ๊ท์ฐฎ์ for๋ฌธ
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}

// ๋ฐฐ์ด์ ๋น๊ธ ๋น๊ธ ๋๋ฉด์ ์ํ๋ ๊ฒ(์ฝ๋ฐฑํจ์)์ ํ  ๋
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

// ์กฐ๊ฑด์ ๋ง๋(์ฝ๋ฐฑํจ์) ์์ดํ์ ์ฐพ์๋
// find: ์ ์ผ ๋จผ์  ์กฐ๊ฑด์ ๋ง๋ ์์ดํ์ ๋ฐํ
const item1 = { name: '๐ฅ', price: 2 }
const item2 = { name: '๐ฅช', price: 3 }
const item3 = { name: '๐ฅจ', price: 1 }
const products = [item1, item2, item3, item2]
const result = products.find((value) => {
  console.log(value)
  return value.name === '๐ฅช'
})
console.log(result)

let result2 = products.find((value) => value.name === '๐ฅช')
console.log(result2)

// findIndex : ์ ์ผ ๋จผ์  ์กฐ๊ฑด์ ๋ง๋ ์์ดํ์ ์ธ๋ฑ์ค๋ฅผ ๋ฐํ
result2 = products.findIndex((value) => value.name === '๐ฅช')
console.log(result2)

// ๋ฐฐ์ด์ ์์ดํ๋ค์ด ๋ถ๋ถ์ ์ผ๋ก ์กฐ๊ฑด(์ฝ๋ฐฑํจ์)์ ๋ง๋์ง ํ์ธ
result2 = products.some((value) => {
  console.log(value)
  return value.name === '๐ฅช'
})
// ํ๋๋ผ๋ ์๋์์น๊ฐ ์์ผ๋ฉด true์
console.log(result2)

// ๋ฐฐ์ด์ ์์ดํ๋ค์ด ์ ๋ถ ์กฐ๊ฑด(์ฝ๋ฐฑํจ์)์ ๋ง๋์ง ํ์ธ
result2 = products.every((value) => {
  console.log(value)
  return value.name === '๐ฅช'
})
// ์๋์์น๊ฐ ํ ๊ณณ์ด๋ผ๋ ์์ผ๋ฉด false์
console.log(result2)

// ์กฐ๊ฑด์ ๋ง๋ ๋ชจ๋  ์์ดํ๋ค์ ์๋ก์ด ๋ฐฐ์ด๋ก!
result2 = products.filter((value) => {
  console.log(value)
  return value.name === '๐ฅช'
})
// ์๋์์น๊ฐ ์๋ ๊ฒ๋ค์ด ๋ฐฐ์ด๋ก ์ถ๋ ฅ๋จ
console.log(result2)

console.clear()

// Map ๋ฐฐ์ด์ ์์ดํ์ ๊ฐ๊ฐ ๋ค๋ฅธ ์์ดํ์ผ๋ก ๋งคํํ  ์ ์๋, ๋ณํํด์ ์๋ก์ด ๋ฐฐ์ด ์์ฑ
// ์์ดํ ํ๋์ฉ ์ฐ๊ฒฐ => ๋งตํ
const nums = [1, 2, 3, 4, 5]
let res = nums.map((item) => item * 2)
// let res = nums.map((item) => {
//   console.log(item)
//   return item * 2
// })
// ๊ฐ๊ฐ์ item์ ๋ฐ์์์ ์๋ก์ด item์ผ๋ก ๋ฆฌํด
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

// sort ๋ฐฐ์ด์ ์์ดํ๋ค์ ์ ๋ ฌ
// ๋ฌธ์์ด ํํ์ ์ค๋ฆ์ฐจ์์ผ๋ก ์์๋ฅผ ์ ๋ ฌํ๊ณ , ๊ธฐ์กด์ ๋ฐฐ์ด์ ๋ณ๊ฒฝ
const texts = ['hi', 'abc']
texts.sort()
console.log(texts)

const numbers = [0, 5, 4, 2, 1, 10]
// numbers.sort()
// console.log(numbers)
numbers.sort((a, b) => {
  // a - b : ์์์ด๋ฉด a๊ฐ ํผ
  // ์์์ด๋ฉด ์๋ฆฌ ๋ฐ๊ฟ
  // a - b : ์์์ด๋ฉด b๊ฐ ํผ
  return a - b
})
console.log(numbers)

// reduce ๋ฐฐ์ด์ ์์๋ค์ ์ ์ด์(๋ํด์) ์ ์ด์(๋ํด์) ๊ฐ์ ํ๋๋ก
res = [1, 2, 3, 4, 5].reduce((sum, value) => {
  // sum : value๋ค์ด ๋ํด์ง ๊ฐ
  // value : ๋ํ  ๊ฐ
  sum += value
  return sum
}, 0)
// sum์ ์ด๊ธฐํ์ํฌ ์ ์์
// ์ด๊ธฐ๊ฐ : 0

console.log(res)

res = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0)

console.log(res)
