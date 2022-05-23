// 조건문 Conditional Statement
// switch
// if else if else if ... esle
// 정해진 범위안의 값에 대해 특정한 일을 해야 하는 경우
let day = 6 // 0:월요일, 1:화요일 ... 6:일요일
switch (day) {
  case 0:
    dayName = '월요일'
    break
  case 1:
    dayName = '화요일'
    break
  case 2:
    dayName = '수요일'
    break
  case 3:
    dayName = '목요일'
    break
  case 4:
    dayName = '금요일'
    break
  case 5:
    dayName = '토요일'
    break
  case 6:
    dayName = '일요일'
    break
}
console.log(dayName)

// breack가 생략되는 조건
let condition = 'soso' // okaym good -> 좋음!, bad -> 나쁨!
let text
switch (condition) {
  case 'okay':
  case 'good':
    text = '좋음!'
    break
  case 'bad':
    text = '나쁨'
    break
  default:
    text = '해당 내용 없음'
}
console.log(text)

var foo = 1
switch (foo) {
  case 2:
    console.log(2)
    break // it encounters this break so will not continue into 'default:'
  default:
    console.log('default')
    // fall-through
    break
  case 1:
    console.log('1')
}

let a = 0

switch (a) {
  case 1:
    console.log('a는 1입니다.')
    break
  default: // a는 1도 2도 아닙니다.
    console.log('a는 1도 2도 아닙니다.')
    break
  case 2:
    console.log('a는 2입니다.')
}
