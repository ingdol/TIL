function add(a, b) {
  console.log(a)
  console.log(b)
  return a + b
}
const sum = add // sum은 add의 메모리 주소값을 받음

console.log(sum(1, 2))
console.log(add(1, 2))
