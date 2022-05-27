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
//   .catch((error) => {
//     console.log(error.name)
//     return '다른 닭'
//   })
//   .then((chicken) => fetchEgg(chicken))
//   .then((egg) => fryEgg(egg))
//   .then((friedEgg) => console.log(friedEgg))
getChicken()
  .catch(() => '다른 닭')
  .then(fetchEgg())
  .then(fryEgg())
  .then(console.log)
