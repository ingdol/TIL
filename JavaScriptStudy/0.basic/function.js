function add(num1, num2) {
  return num1 + num2
}

const doSomething = add

const result = doSomething(2, 3)
console.log(result)
const result2 = add(2, 3)
console.log(result2)
