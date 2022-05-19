// 1. use strict
// added in ES 5
// use this for Valina Javascript.
'use strict'

// 2. Variable
// let (added in ES6)
// block 밖에서 정의하는 변수는 global scope
let globalName = 'global name'
{
  let name = 'abc' // name 변수에 'abc' 할당
  console.log(name)
  name = 'hello'
  console.log(name)
  console.log(globalName)
}
console.log(name)
console.log(globalName)

// var (don't ever use this!)
console.log(age)
age = 4
console.log(age)
var age

// age2 = 4
// let age2

// block scope을 무시함
{
  age3 = 4
  var age3
}

console.log(age3)

// variable type
// primitive, single item : number, string, boolean, null, undefined, sybol
// object, box container
// function, first-class function
const count = 17 // integer
const size = 17.1 // decimal number
console.log(`value: ${count}, type: ${typeof count}`)
console.log(`value: ${size}, type: ${typeof size}`)

// number - special numeric values : infinity, - infinity, NaN

const infinity = 1 / 0
const negativeInfinity = -1 / 0
const nAn = 'not a number' / 2
console.log(infinity)
console.log(negativeInfinity)
console.log(nAn)

// bigInt (fairly new, don't use it yet)
const bigInt = 12345678901234567890123456789012345678901234567890n
console.log(`value: ${bigInt}, type: ${typeof bigInt}`)

// string
const char = 'c'
const brendan = 'berendan'
const greeting = 'hello ' + brendan
console.log(`value: ${greeting}, type: ${typeof greeting}`)
const helloBob = `hi ${brendan}!`
console.log(`value: ${helloBob}, type: ${typeof helloBob}`)

// boolean
// false: 0, null, undefined, NaN, ''
// true: any ather value
const canRead = true
const test = 3 < 1 // false
console.log(`value: ${canRead}, type: ${typeof canRead}`)
console.log(`value: ${test}, type: ${typeof test}`)

const canRead2 = false
const canRead3 = undefined
console.log(`value: ${canRead2}, type: ${typeof canRead2}`)
console.log(`value: ${canRead3}, type: ${typeof canRead3}`)

// null
let nothing = null
console.log(`value: ${nothing}, type: ${typeof nothing}`)

// undefined
let x // 아무것도 값이 할당되어 있지 않아도 됨
let y = undefined // undefined라고 지정해도 됨
console.log(`value: ${x}, type: ${typeof x}`)
console.log(`value: ${y}, type: ${typeof y}`)

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id')
const symbol2 = Symbol('id')
// 동일한 심볼로 작성해도 고유한 식별자로 주어짐
console.log(symbol1 === symbol2) //false

// 동일한 심볼을 만들고 싶을 때
const gSymbol1 = Symbol.for('id')
const gSymbol2 = Symbol.for('id')
console.log(gSymbol1 === gSymbol2) // true
console.log(
  `value: ${symbol1.description}, type: ${typeof symbol1.description}`
)

// Dynamic typing : dynamically typed language
let text = 'hello' // 문자열을 넣으면 string이 됨
console.log(text.charAt(0)) //h
console.log(`value: ${text}, type: ${typeof text}`)
text = 1 // 숫자를 넣으면 문자열에서 number가 됨
console.log(`value: ${text}, type: ${typeof text}`)
text = '7' + 5 // 더하기 연산자 -> 숫자를 감싼 문자열과 숫자를 더하면 문자열로 반환함
console.log(`value: ${text}, type: ${typeof text}`)
text = '7' / '5' // 나누기 연산자 -> 문자열이여도 숫자 나누기 숫자로 반환함
console.log(`value: ${text}, type: ${typeof text}`)
// text가 숫자로 변경돼서 다음은 오류가 발생함
console.log(text.charAt(0))
