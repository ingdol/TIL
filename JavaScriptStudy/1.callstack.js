function a() {
  return 1
}
function b() {
  return a() + 1
}
function c() {
  return b() + 1
}

const result = c()
// c 호출 -> b 호출 -> a 호출
// a 함수 반환 -> b의 2 반환 -> c의 3 반환
console.log(result)

// 동기적으로 실행되기 때문에 오래걸리는 작업을 수행하면 좋지 않음
