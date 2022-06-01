// 동기적인 코드처럼 보이지만 비동기적으로 동작
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

// async는 비동기 함수 -> 비동기처럼 행동하는데
// 함수 내부에서는 동기적인 코드를 작성할 수 있음

// 다음은 callback이 많은 복잡한 동작
// function fetchFruits() {
//   return getBanana() //
//     .then((banana) =>
//       getApple()
//         //
//         .then((apple) => [banana, apple])
//     )
// }
// fetchFruits() //
//   .then(console.log)

// async 사용
async function fetchFruits() {
  // promise가 동작되고
  // 밑에 await들이 비동기적으로 처리되면서 값을 기다리다가
  const banana = await getBanana()
  const apple = await getApple()
  // 밑에 값을 resolve함
  return [banana, apple]
}
fetchFruits().then(console.log)
