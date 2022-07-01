<template>
  <!-- [ 템플릿 문법 ] -->
  <!-- < 텍스트 보간법 > -->
  <span>메시지: {{ msg }}</span>

  <!-- < HTML 출력 > -->
  <!-- 앞에 v가 붙이면 디렉티브 -->
  <!-- {{}}는 데이터를 text로 받기 때문에 v-html로 html 사용 가능 -->
  <!-- 하지만 v-html은 보안 문제로, 되도록이면 적게 사용해야 함 -->
  <p>텍스트 보간법 사용: {{ rawHtml }}</p>
  <p>v-html 디렉티브 사용: <span v-html="rawHtml"></span></p>

  <!-- < 속성 바인딩 > -->
  <!-- -1. html 내에 바인딩 -->
  <div v-bind:id="dynamicId"></div>
  <!-- -2. 단축 문법 -->
  <div :id="dynamicId"></div>
  <!-- -3. 불리언 속성 -->
  <!-- 불리언 속성 중 하나인 disabled를 사용하면 -->
  <!-- isButtonDisabled의 값이 truthy인 경우 속성이 표기됨 -->
  <!-- 근데 falsy인 ''는 왜 disabled=true가 될까? -->
  <button :disabled="isButtonDisabled">버튼</button>
  <!-- -4. 여러 속성을 동적으로 바인딩 -->
  <div v-bind="objectOfAttrs"></div>

  <!-- < JavaScript 표현식 사용 > -->
  <!-- -1. 하나의 표현식만 가능 -->
  <!-- -1-1. 선언식 말고 표현식만 가능 -->
  <!-- {{ number + 1 }} -->
  <!-- -1-2. if문 말고 삼항 표현식 사용  -->
  <!-- {{ ok ? '예' : '아니오' }} -->
  <!-- 예) -->
  <!--  {{ message.split('').reverse().join('') }}
        <div :id="`list-${id}`"></div>  -->
  <!-- -2. 함수 호출 -->
  <!-- 바인딩 표현식 내부에서 컴포넌트에서 노출하는 메서드를 호출할 수 있음 -->
  <span :title="formatDate()">
    {{ formatDate() }}
  </span>

  <!-- < 디렉티브 > -->
  <!-- v-if -->
  <p v-if="seen">이 부분이 보이나요~?</p>
  <!-- 1. 인수 -->
  <!-- v-bind:인수 -> :인수 -->
  <!-- 콜론을 사용하여 인수를 사용할 수 있음 -->
  <a v-bind:href="url"> 네이버로 이동 1 </a>
  <!-- 단축 문법 -->
  <a :href="url"> 네이버로 이동 2 </a>

  <!-- v-on:click -> @click -->
  <a v-on:click="doSomething"> 클릭 1 </a>
  <!-- 단축 문법 -->
  <a @click="doSomething"> 클릭 2 </a>

  <!-- 2. 동적인 인수 -->
  <!-- 디렉티브의 인수 부분은 대괄호 안에 data를 넣어 사용할 수 있음  -->
  <a v-bind:[attributeName]="url"> 이동 1 </a>
  <a :[attributeName]="url"> 이동 2 </a>

  <!-- 3. 수식어 -->
  <!-- .으로 시작하는  -->
  <!-- <form @submit.prevent="onSubmit">...</form> -->

  <!-- v-on:submit.prevent="onSubmit"-->
  <!-- v-on => 이름(디렉티브) -->
  <!-- :submit => 인수 -->
  <!-- .prevent => 수식어 -->
  <!-- "onSubmit" => 값 -->

  <!-- [ 반응형 기초 ] -->
  <!-- methods는 컴포넌트 템플릿 내에서 접근 가능 -->
  <!-- 주로 이벤트 리스너로 사용 -->
  <button id="counter" @click="increment">{{ count }}</button>

  <!-- < 깊은 반응형 > -->
  <button id="mutateDeeply" @click="mutateDeeply">
    {{ obj.nested.count }}
  </button>

  <!-- [ 계산된 속성 ] -->
  <p>책을 가지고 있다</p>
  <!-- 템플릿이 복잡해짐 -> 반응형 데이터를 포함하는 복잡한 논리 -->
  <!-- <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span> -->
  <!-- 계산된 속성을 사용하는 것이 좋음 -->
  <span>{{ publishedBooksMessage }}</span>

  <!-- < 계산된 캐싱 vs 메서드 > -->
  <!-- 계산된 속성 대신 메서도 사용해도 됨 -->
  <!-- 차이점 : 계산된 속성은 종속된 반응형을 기반으로 캐시된다는 점 -->
  <!-- author.books가 변경되지 않으면 publishedBooksMessage를 접근해도 이전에 계산된 결과를 즉시 반환 -->
  <!-- 반대로 메서드 호출은 리렌더링이 발생할 때마다 항상 함수 실행 -->
  <!-- 불필요한 호출을 줄이기 위해 계산된 캐싱 사용 -->
  <p>{{ calculateBooksMessage() }}</p>

  <!-- 수정 가능한 계산된 속성 -->
  <p>{{ get(fullName) }}</p>
</template>

<script>
import { nextTick } from 'vue'
// import { debounce } from 'lodash-es'

export default {
  name: 'App',
  // data 옵션을 사용하여 컴포넌트의 반응형 상태 선언
  // 옵션 값은 객체를 반환하는 함수
  // 새 컴포넌트 인스턴스를 만들 때 함수를 호출 -> 반환된 객체를 반응형 시스템에 래핑
  // 이 객체 내 모든 속성은 해당 컴포넌트 인스턴스(this)에서 최상위에 프록시되어 노출
  data() {
    return {
      // data를 선언할 때 null, undefined 또는 임시 값을 넣어 사전에 선언해둬야 함
      // data에 포함하지 않고 this에 직접 새 속성을 추가할 수는 있지만 반응형 업데이트 동작이 이루어지지 않음
      // 컴포넌트 인스턴스를 통해 기본 제공되는 API를 노출할 때 $ 접두사 사용
      // 내부 속성에 대해서는 _ 접두사 사용

      msg: '텍스트 보간법',
      rawHtml: '<span style="color: red">이것은 빨간색이어야 합니다.</span>',
      isButtonDisabled: '',
      dynamicId: 'dynamicId',
      // 여러 속성을 동적으로 바인딩
      objectOfAttrs: {
        id: 'container',
        class: 'wrapper',
      },
      seen: false,
      url: 'http://www.naver.com',
      attributeName: 'href',
      attributename: 'href2',
      someObject: {},
      count: 0,

      // <깊은 반응형>
      // 중첩된 객체나 배열을 변경할 때에도 변경 사항 감지
      obj: {
        nested: { count: 0 },
        arr: ['foo', 'bar'],
      },

      keyword: '',

      // [ 계산된 속성 ]
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery',
        ],
      },

      firstName: 'John',
      lastName: 'Doe',
    }
  },
  computed: {
    // 계산된 값을 반환하는 속성
    publishedBooksMessage() {
      return this.author.books.length > 0 ? 'Yes' : 'No'
    },

    // < 수정 가능한 계산된 속성 >
    fullName: {
      get() {
        return this.firstName + ' ' + this.lastName
      },
      // set(newValue) {
      //npm run lint -- --fix 오류 해결
      // ;[this.firstName, this.lastName] = newValue.split(' ')
      // },
    },
  },
  // < 메서드 선언 >
  // 메서드는 생명 주기 훅 또는 다른 메서드에서 호출 가능
  methods: {
    formatDate() {
      let nowDate = new Date()
      return nowDate
    },
    doSomething() {
      let nowDate = new Date()
      return alert(nowDate)
    },
    async increment() {
      this.count++
      // 아직 DOM 업데이트되지 않음.
      console.log(document.getElementById('counter').textContent) // 0

      // nextTick()은 상태 변경 직후에 DOM 업데이트가 완료될 때까지 대기하는 데 사용
      // 콜백을 인자로 전달하거나, 프로미스 반환을 기다림
      await nextTick()
      // 이제 DOM 업데이트됨.
      console.log(document.getElementById('counter').textContent) // 1
    },
    // 화살표 함수는 함수 내부에서 this로 바인딩하는 것을 방지하므로, 화살표 함수를 사용하는 것은 피해야 함
    // increment: () => { this를 사용할 수 없음 }
    // increment: () => {
    //   const newObject = {}
    //   this.someObject = newObject
    //   console.log(newObject === this.someObject)
    // },
    // increment2() {
    //   const newObject = {}
    //   this.someObject = newObject
    //   console.log(newObject === this.someObject)
    // }
    mutateDeeply() {
      // 변경 사항이 감지됨
      this.obj.nested.count++
      this.obj.arr.push('baz')
    },

    // < 메서드 상태유지 >
    // Lodash로 디바운싱
    // click: debounce(function () {
    // 클릭에 응답
    // }, 500),
    calculateBooksMessage() {
      return this.author.books.length > 0 ? 'Yes' : 'No'
    },
  },
  mounted() {
    // this는 컴포넌트 인스턴스를 나타냄
    // console.log(Boolean(this.isButtonDisabled))

    const newObject = {}
    this.someObject = newObject
    console.log(newObject === this.someObject)
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
