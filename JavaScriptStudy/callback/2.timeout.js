function execute() {
  console.log('1')
  // 비동기 api로 나중에 실행됨
  setTimeout(() => {
    console.log('2')
  }, 3000)
  console.log('3')
}
execute()
