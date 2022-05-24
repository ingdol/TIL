// Bubbling up, Propagating
function a() {
  throw new Error('error!')
}

function b() {
  try {
    a()
  } catch (error) {
    console.log('생각해보니까 에러를 다시 잡을 수 없을 때')
    throw error
  }
}

function c() {
  b()
}

try {
  c()
} catch (error) {
  console.log('Catched!!')
}
