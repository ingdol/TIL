// 논리연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가: short-circuit evaluation
const obj1 = { name: '강아지' }
const obj2 = { name: '고양이', owner: 'rung'}

// 조건식에서는 모든 평가가 이루어짐
if (obj1 && obj2) { // 조건문 안에서는 boolean 연산자
    console.log('둘다 true일 때');
}

if (obj1 || obj2) { // 조건문 안에서는 boolean 연산자
    console.log('둘다 true일 때');
}

// 조건문 밖에서 쓰면 평가를 단축 => 단축 평가
let result = obj1 && obj2 // 앞이 true 이면 obj2는 result에 할당
// &&는 둘다 true여야 하므로 obj1이 true이면 뒤에 obj2도 true인지 확인 -> 그래서 obj2가 할당
console.log(result);

result = obj1 || obj2 // 앞이 true이면 obj1은 result에 할당
// ||는 하나만 true이면 되므로 obj1이 true이면 바로 result에 할당
console.log(result);

// 활용예
// 조건이 truthy일때 && 무언가를 해야 할 경우
// 조건이 falshy일때 || 무언가를 해야 할 경우
function changeOwner(animal) {
    if(!animal.owner) {
        throw new Error('주인이 없어')
    }
    animal.owner = '바뀐 주인'
}
function makeNewOwner(animal) {
    if(animal.owner) {
        throw new Error('주인이 있어')
    }
    animal.owner = '새로운 주인'
}

obj1.owner && changeOwner(obj1)
obj2.owner && changeOwner(obj2)
console.log(obj1)
console.log(obj2)

obj1.owner || makeNewOwner(obj1)
obj2.owner || makeNewOwner(obj2)
console.log(obj1)
console.log(obj2)

// null 또는 undefined인 경우 확인할때
let item // = { price: 1 }
// item이 undefined인데 price 가격을 찾으라고 하니 프로그램이 죽음
// const price = item.price
// 따라서
const price = item && item.price
console.log(price);

// 기본값을 설정
// default parameter을 사용할 수 있지만 
// 이것은 null과 undefined인 경우
// || falshy한 경우 설정(할당) 0, 0-, null, undefined, ''
function print(message = 'Hi') {
    // const text = message || 'Hello'
    console.log(message)
}
print('안녕') // true이므로 '안녕' 반환
print('')  //false인데도 'Hi' 반환 안함
print() //undefined여서 'Hello' 반환

function print2(message) {
    const text = message || 'Hello'
    console.log(text)
}
print2('안녕') //t
print2('')  //f
print2() //f