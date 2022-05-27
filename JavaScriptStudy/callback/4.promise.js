function runInDelay(seconds) {
  // Promise 객체를 만들때는 new 연산자로 만들어야 함
  // Promise((성공했다는 함수, 실패했다는 것을 알려줌))
  return new Promise((resolve, reject) => {
    // setTimeout(callback, 초로 변환)
    // setTimeout(() => {resolve()}, seconds * 1000)
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작음'))
    }
    setTimeout(resolve, seconds * 1000)
  })
}
try {
  runInDelay(() => console.log('타이머 완료'), 2)
} catch (error) {}
runInDelay(2)
  .then(() => console.log('타이머 완료'))
  .catch(console.error)
  // 에러처리 : error => console.error(error) -> error 중복되면 생략 가능
  .finally(() => console.log('끝났다'))
