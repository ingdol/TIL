function fetchEgg(chicken) {
  // return new Promise((resolve, reject))
  return Promise.resolve(`${chicken} => 달걀`)
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 후라이`)
}
function getChicken() {
  return Promise.reject(new Error('치킨을 가지고 올 수 없음'))
  //   return Promise.resolve(`사료 => 닭`)
}

// getChicken()
//   .catch(() => '다른 닭')
//   .then(fetchEgg())
//   .then(fryEgg())
//   .then(console.log)

async function getResult() {
  let chicken // getChicken 다음에 전달받을 chicken 변수에
  try {
    // getChicken()이 잘 동작되면 시도하고
    chicken = await getChicken()
  } catch {
    // 잘동작되지 않으면 chicken에 다른 값 대임
    chicken = '다른 닭'
  }
  // fetchEgg에 chicken 값 넣고 egg에 값 대입
  const egg = await fetchEgg(chicken)
  // egg 변수를 넣어 fryEgg 함수 값 반환
  return fryEgg(egg)
}

// 함수 값 반환
getResult().then(console.log)
