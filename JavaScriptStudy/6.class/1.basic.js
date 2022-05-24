// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수(오래된 고전적인 방법)
// 2. 클래스
// 생성자 함수 -> class로 변경
class Fruit {
  // 생성자 : new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, about) {
    this.name = name
    this.about = about
  }
  display = () => {
    console.log(`${this.name}: ${this.about}`)
  }
  // return this // 생략 가능
}

// apple은 Fruit 클래스의 인스턴스임
const apple = new Fruit('apple', '애플')
// orange Fruit 클래스의 인스턴스임
const orange = new Fruit('orange', '오렌지')
console.log(apple)
console.log(orange)
console.log(apple.name)
console.log(orange.about)
apple.display()

// obj는 객체이고, 그 어떤 클래스의 인스턴스도 아님
const obj = { name: 'ellie' }
