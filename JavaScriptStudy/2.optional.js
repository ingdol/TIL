// 옵셔널 체이닝 연산자 Optional Chaining Operator
// ?.
// null 또는 undefined를 확인할 때
let item = { price: 1 }
// const price = item && item.price
const price = item?.price
// item이 있나? 있으면 item.price 할당
console.log(price);

// 복잡한 세부 object도 가능
let obj = { name: '강아지', owner: { name: 'rung' } }
const ownerName = obj?.owner?.name
console.log(ownerName);