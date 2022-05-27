// JSON : JavaScript Object Notation
// object 형태의 문자열
// 서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한
// 오브젝트 형태의 텍스트 포맷
const ellie = {
  name: 'ellie',
  age: 20,
  eat: () => {
    console.log('eat')
  },
}

// 직렬화 Serializing : 객체를 문자열로 변환
const json = JSON.stringify(ellie)
// onject의 데이터, 상태만 포함됨
console.log(ellie)
console.log(json)
// JSON으로 만들어서 서버로 보냄

// 역직렬화 Deserializing : 문자열 데이터를 자바스크립트 객체로 변환
const obj = JSON.parse(json)
console.log(obj)
// 서버에서 받은 JSON을 오브젝트로 변환
