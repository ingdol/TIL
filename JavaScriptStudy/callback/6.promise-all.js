function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('바나나')
    }, 1000)
  })
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('사과')
    }, 3000)
  })
}

// orange는 에러 발생
function getOrange() {
  return Promise.reject(new Error('no orange'))
}

// 바나나와 사과를 같이 가지고 오기
getBanana() //
  .then((banana) =>
    getApple()
      //
      .then((apple) => [banana, apple])
  ) //
  .then(console.log)

// Promise.all 병렬적으로 한번에 모든 Promise들을 실행
Promise.all([getBanana(), getApple()]).then((fruits) =>
  console.log('all', fruits)
)
// all 에러버전
Promise.all([getBanana(), getApple(), getOrange()])
  .then((fruits) => console.log('all-error', fruits))
  .catch(console.log)

// 에러나기 전까지랑 어디서 에러났는지 확인용
// Promise.allSettled
Promise.allSettled([getBanana(), getApple(), getOrange()])
  .then((fruits) => console.log('all-settle', fruits))
  .catch(console.log)

// Promise.race 주어진 Promise 중에 제일 빨리 수행된 것이 이김
// 제일 먼저 수행된 값만 반환
Promise.race([getBanana(), getApple()]).then((fruit) =>
  console.log('rece', fruit)
)
