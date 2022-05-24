// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name}: '사과'`)
//   },
// }
// const orange = {
//   name: 'orange',
//   display: function () {
//     console.log(`${this.name}: '오렌지'`)
//   },
// }

// 생성자 함수
function Fruit(name, about) {
  this.name = name
  this.about = about
  this.display = () => {
    console.log(`${this.name}: ${this.about}`)
  }
  // return this // 생략 가능
}

const apple = new Fruit('apple', '애플')
const orange = new Fruit('orange', '오렌지')
console.log(apple)
console.log(orange)
console.log(apple.name)
console.log(orange.about)
apple.display()

function Car() {}
car1 = new Car()
car2 = new Car()

console.log(car1.color) // undefined

Car.prototype.color = 'original color'
console.log(car1.color) // original color

car1.color = 'black'
console.log(car1.color) // black

console.log(car1.__proto__.color) //original color
console.log(car2.__proto__.color) //original color
console.log(car1.color) // black
console.log(car2.color) // original color
function User(name) {
  // this = {};  (빈 객체가 암시적으로 만들어짐)

  // 새로운 프로퍼티를 this에 추가함
  this.name = name
  this.isAdmin = false

  // return this;  (this가 암시적으로 반환됨)
}
let user = {
  name: '보라',
  isAdmin: false,
} // 새로운 user 오브젝트 생성

let user2 = new User('보라') // 생성자 함수 User 사용하여 user2 오브젝트 생성
console.log(user)
console.log(user2)
