function readFile(path) {
  throw new Error('파일 경로를 찾을 수 없음')
  return '파일의 내용'
}

function processFile(path) {
  // 에러가 발생하는 readFile에서
  //   const content = readFile(path)
  // content 변수를 선언
  let content
  try {
    // 에러를 던지는 함수는 try로 시도하고
    content = readFile(path)
  } catch (error) {
    // error가 발생하면 catch로 잡을 수 있음
    console.log(error)
    content = '기본내용'
  }

  const result = 'hi ' + content
  return result
}

const result = processFile('경로')
console.log(result)
