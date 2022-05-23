let fruit = 'apple'
if (fruit === 'apple') {
  console.log('🍎')
} else if (fruit === 'orange') {
  console.log('🍊')
} else {
  console.log('!!')
}

fruit === 'apple' ? console.log('🍎') : console.log('!!')

// 조건에 따라 할당하기
let emoji = fruit === 'apple' ? '🍎' : '!!'
console.log(emoji)
