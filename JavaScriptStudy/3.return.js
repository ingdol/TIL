function add(a, b) {
  // return a + b
  // return이 없을경우 함수는 undefined 반환
  // return 을 명시적으로 하지 않으면 자동으로 undefined 반환
}

const result = add(1, 2)
console.log(result)

// return을 함수 중간에 하게 되면 함수가 종료됨
// 사용예 ) 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함
function print(num) {
  // 무거운걸 수행하기 전 미리 검사하고 넘어감
  // 전달할 인자가 유효한지 아닌지 꼭 검사하고 넘어가는 것이 중요
  if (num < 0) {
    return
    // return 하면 함수가 종료됨
  }
  console.log(num)
}
print(12)
print(-12)
