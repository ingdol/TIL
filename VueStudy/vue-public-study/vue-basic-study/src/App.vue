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
  <!-- <p>{{ get(fullName) }}</p> -->

  <!-- [ 클래스와 스타일 바인딩 ] -->
  <!-- < HTML 클래스 바인딩 > -->
  <!-- 객체로 바인딩하기 -->
  <!-- <div :class="{ active: isActive }">test</div> -->
  <!-- 바인딩 - 인라인 방법 -->
  <div class="static" :class="{ active: isActive, 'text-danger': hasError }">
    class 인라인
  </div>
  <!-- 계산된 속성 -->
  <div :class="classObject">class 속성</div>

  <!-- 배열로 바인딩 -->
  <div :class="[activeClass, errorClass]">배열로 바인딩</div>
  <div :class="[isActive ? activeClass : '', errorClass]">삼항 표현식</div>
  <div :class="[{ active: isActive }, errorClass]">객체 구문 사용</div>

  <!-- < 인라인 스타일 바인딩 > -->
  <!-- 객체로 바인딩 -->
  <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">
    style 바인딩
  </div>
  <!-- 스타일 객체를 직접 바인딩 -->
  <div :style="styleObject">style 바인딩</div>
  <!-- 배열로 바인딩 -->
  <!-- <div :style="[baseStyles, overridingStyles]"></div> -->
  <!-- 다중 값 -->
  <div :style="{ display: ['flex', '-webkit-box', '-ms-flexbox'] }">
    다중 값
  </div>

  <!-- [ 조건부 랜더링 ] -->
  <!-- < v-if > -->
  <button @click="awesome = !awesome">전환</button>

  <h1 v-if="awesome">여기는 보이는 공간</h1>
  <h1 v-else>안 보이는 공간</h1>

  <button @click="type = 'A'">a로 바꾸기</button>
  <h1 v-if="type === 'B'">지금은 B</h1>
  <h1 v-else-if="type === 'A'">a로 바뀜</h1>

  <!-- < <template>에서 v-if > -->
  <template v-if="awesome">
    <h1>제목</h1>
    <p>awesome이 true라 전체 보임</p>
  </template>

  <!-- <v-show> -->
  <h1 v-show="awesome">안녕</h1>
  <!-- v-show : <template> 엘리먼트를 지원하지 않음, v-else와 상호작용하지 않음 -->
  <!-- v-show는 자주 전환해야 하는 경우 -->
  <!-- v-if는 실행 중에 조건이 변경되지 않는 경우 -->

  <!-- [ 리스트 렌더링 ] -->
  <!-- < v-for > -->
  <!-- in 대신 of도 됨 -->
  <li v-for="(item, index) in items" :key="item.id">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>

  <!-- 속성, 속성명, 인덱스 -->
  <li v-for="(value, key, index) in myObject" :key="key">
    {{ index }}. {{ key }} : {{ value }}
  </li>

  <!-- 숫자 범위에 v-for 사용하기 -->
  <!-- n의 값은 0이 아니라 1부터 시작 -->
  <span v-for="n in 10" :key="n">{{ n }}</span>

  <!-- 컴포넌트에 v-for 사용 -->

  <!-- < 배열 변경 감지 > -->
  <!-- 배열 교체 -->
  <button @click="changeArr">배열 교체</button>
  {{ items }}

  <!-- < 필터링/정렬 결과 표시 > -->
  <li v-for="n in evenNumbers" :key="n">{{ n }}</li>

  <ul v-for="numbers in sets" :key="numbers">
    <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
  </ul>

  {{ reverseArr() }}
  {{ numbers }}

  <!-- < 인라인 핸들러 > -->
  <button @click="count++">1 추가</button>
  <p>숫자 값은: {{ count }}</p>

  <!-- < 메서드 핸들러 > -->
  <button @click="greet">환영하기</button>

  <!-- < 인라인 핸들러에서 메서드 호출 > -->
  <button @click="say('안녕')">안녕이라고 말하기</button>
  <button @click="say('잘가')">잘가라고 말하기</button>

  <!-- < 인라인 핸들러에서 이벤트 객체 접근하기 > -->
  <!-- 특수한 키워드인 $event 사용 -->
  <button @click="warn('아직 양식을 제출할 수 없습니다.', $event)">
    제출하기
  </button>

  <!-- 인라인 화살표 함수 사용 -->
  <button @click="(event) => warn('아직 양식을 제출할 수 없습니다.', event)">
    제출하기
  </button>

  <!-- < 이벤트 수식어 > -->
  <!-- 클릭 이벤트 전파가 중지됨 -->
  <a @click="doThis"
    >전파 중지
    <a @click.stop="doThis2">전파 중지2</a>
  </a>

  <!-- submit 이벤트가 더 이상 페이지 리로드하지 않음 -->
  <form @submit.prevent="onSubmit">
    <input type="submit" value="submit" />리로드 안함
  </form>

  <!-- 수식어를 연결할 수 있음 -->
  <a @click.stop.prevent="count++"
    >수식어 연결

    <a @click.stop.prevent="count++">수식어 연결2</a>
  </a>
  <p>{{ count }}</p>

  <!-- 이벤트에 핸들러 없이 수식어만 사용할 수 있음 -->
  <form @submit.prevent>
    <input type="submit" value="submit" />수식어만 사용
  </form>

  <!-- event.target이 엘리먼트 자신일 경우에만 핸들러가 실행됨 -->
  <!-- 예를 들어 자식 엘리먼트에서 클릭 액션이 있으면 핸들러가 실행되지 않음 -->
  <button @click.self="count++">
    클릭 1
    <button @click="count++">클릭 2</button>
  </button>
  {{ count }}

  <!-- [ Form 입력 바인딩 ] -->
  <!-- v-model -->
  <!-- <input :value="text" @input="(event) => (text = event.target.value)" /> -->
  <input v-model="text" />
  <p style="white-space: pre-line">메시지 {{ text }}</p>

  <!-- < 여러 줄 텍스트 > -->
  <textarea v-model="text"></textarea>

  <!-- < 체크박스 > -->

  <!-- [ 감시자 ] -->
  <p>예/아니오 질문 : <input v-model="question" /></p>
  <p>{{ answer }}</p>

  <!-- [ 템플릿 참조 ] -->
  <!-- < ref로 접근하기 > -->
  <input ref="input" />

  <!-- < v-for 내부에서 ref 사용하기 > -->
  <ul>
    <li v-for="item in list" :key="item" ref="items">
      {{ item }}
    </li>
  </ul>

  <!-- < 함수로 참조하기 > -->
  <input
    :ref="
      (el) => {
        // el을 속성이나 ref에 할당
        // el.focus()
      }
    "
  />
  <div :style="{ fontSize: postFontSize + 'em' }">
    <!-- [ 컴포넌트 이벤트 ] -->
    <!-- < 이벤트 발신 및 수신하기 > -->
    <!-- @enlarge-text -> 부모는 v-on 사용 -->
    <!-- 부모에서는 kebab-case로 표기 -->
    <ButtonCounter
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :likes="post.likes"
      :is-published="post.isPublished"
      :comment-ids="post.commentIds"
      @enlarge-text="postFontSize += 0.1"
      greeting-message="안녕"
      @increase-by="(n) => (count += n)"
    />
    <p>{{ count }}</p>
    <!-- props를 자식 컴포넌트에 전달할 때, camelCase로 선언된 props 속성이여도 HTML 속성 표기법에서는 kebab-case로 표기 -->
    <!-- 정적 props -> greeting-message="안녕" -->
    <!-- 동적 props -> :title="post.title" -->

    <!-- '42', 'false'는 정적이지만 문자열이 아닌 js 표현식임을 v-bind로 알려줌 -->
    <ButtonCounter
      :likes="42"
      :is-published="false"
      :comment-ids="[234, 266, 273]"
      :author="{
        name: '이름',
        company: '회사',
      }"
    />

    <!-- 값이 없는 prop은 'true' -->
    <ButtonCounter is-published />

    <h3>위에 템플릿은 다음과 동일</h3>
    <ButtonCounter v-for="post in posts" v-bind="post" :key="post" />
  </div>

  <!-- < 슬롯이 있는 콘텐츠 배포 > -->
  <AlertBox>slot</AlertBox>

  <!-- < 동적 컴포넌트 > -->
  <div class="demo">
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="['tab-button', { active: currentTab === tab }]"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <!-- currentTab이 변경되면 컴포넌트가 변경 -->
    <!-- vue의 <component> 엘리먼트 안에 is 속성 있음 -->
    <!-- :is에 전달된 값 : 등록된 컴포넌트의 이름 문자열, 실제 가져온 컴포넌트 객체 -->
    <component :is="currentTab" class="tab"></component>
  </div>
  <HomePage />
</template>

<script>
import { nextTick } from 'vue'
// import { debounce } from 'lodash-es'
import ButtonCounter from './ButtonCounter.vue'
import AlertBox from './AlertBox.vue'
// import Home from './Home.vue'
import Posts from './Posts.vue'
import Archive from './Archive.vue'

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

      // isActive: true,
      // hasError: false,

      // classObject: {
      //   active: true,
      //   'text-danger': false,
      // },

      isActive: true,
      error: null,
      // error: { type: 'fatal' },

      activeClass: 'active',
      errorClass: 'text-danger',

      activeColor: 'red',
      fontSize: 30,

      styleObject: {
        color: 'red',
        fontSize: '13px',
      },

      awesome: true,
      type: 'B',

      parentMessage: 'Parent',
      items: [{ message: 'Foo' }, { message: 'Bar' }],

      myObject: {
        title: 'Vue에서 목록을 작성하는 방법',
        author: '홍길동',
        publicshedAt: '2016-04-10',
      },

      numbers: [1, 2, 3, 4, 5],

      sets: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
      ],

      text: '',

      // [ 감시자 ]
      question: '',
      answer: '질문에는 일반적으로 물음표가 포함됩니다.',

      // [ 템플릿 참조 ]
      // < v-for 내부에서 ref 사용하기 >
      list: [1, 2, 3],

      // < props 전달하기 >
      posts: [
        {
          id: 1,
          title: 'vue와 함께한 나의 여행',
          likes: 40,
          isPublished: 'true',
          commentIds: [0, 0],
          author: {
            name: '이름',
            company: '회사',
          },
        },
        {
          id: 2,
          title: 'vue로 블로깅하기',
          likes: 30,
          isPublished: 'true',
          commentIds: [1, 1],
          author: {
            name: '이름',
            company: '회사',
          },
        },
        {
          id: 3,
          title: 'vue가 재미있는 이유',
          likes: 20,
          isPublished: 'true',
          commentIds: [2, 2],
          author: {
            name: '이름',
            company: '회사',
          },
        },
      ],
      postFontSize: 1,
      currentTab: 'HomePage',
      tabs: ['HomePage', 'Posts', 'Archive'],
    }
  },
  components: {
    ButtonCounter,
    AlertBox,
    // Home,
    Posts,
    Archive,
  },
  watch: {
    // 질문이 변경될 때마다 이 함수가 실행됨
    question(newQuestion, oldQusetion) {
      if (newQuestion.indexOf('?') > -1) {
        this.getAnswer()
      }
      console.log(oldQusetion)
    },

    // < 깊은 감시자 >
    someObject: {
      handler(newValue, oldValue) {
        console.log(newValue)
        console.log(oldValue)
      },
      deep: true,
    },
  },
  computed: {
    // 계산된 값을 반환하는 속성
    publishedBooksMessage() {
      return this.author.books.length > 0 ? 'Yes' : 'No'
    },

    // < 수정 가능한 계산된 속성 >
    // fullName: {
    //   get() {
    //     return this.firstName + ' ' + this.lastName
    //   },
    // set(newValue) {
    //npm run lint -- --fix 오류 해결
    // ;[this.firstName, this.lastName] = newValue.split(' ')
    // },
    // },
    classObject() {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal',
      }
    },

    // 필터링/정렬 결과 표시
    evenNumbers() {
      return this.numbers.filter((n) => n % 2 === 0)
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

    // 배열 교체
    changeArr() {
      this.items = this.items.filter((item) => item.message.match(/Foo/))
      return this.items
    },

    even(numbers) {
      return numbers.filter((number) => number % 2 === 0)
    },

    reverseArr() {
      // revers()와 sort()는 원본 배열을 수정하므로
      // [...numbers]와 같이 복사본을 만들어야 함
      // computed()에서는 사용 못함
      return [...this.numbers].reverse()
    },

    // < 메서드 헨들러 >
    greet(event) {
      // 'this'는 메서드가 활성화된 현재 인스턴스를 가리킴
      alert(`안녕 ${this.firstName}!`)
      // 'event'는 네이티브 DOM 이벤트 객체
      if (event) {
        alert(event.target.tagName)
      }
    },
    // < 인라인 핸들러에서 메서드 호출 >
    say(message) {
      alert(message)
    },

    // < 인라인 핸들러에서 이벤트 객체 접근하기 >
    warn(message, event) {
      // 네이티브 이벤트 객체에 접근할 수 있음
      if (event) {
        event.preventDefault()
      }
      alert(message)
    },
    doThis() {
      alert('전파 중지')
    },
    doThis2() {
      alert('전파 중지2')
    },
    // [ 감시자 ]
    async getAnswer() {
      this.answer = '생각 중 ...'
      try {
        const res = await fetch('https://yesno.wtf/api')
        this.answer = (await res.json()).answer === 'yes' ? '네' : '아니오'
      } catch (error) {
        this.answer = '오류! API에 연결할 수 없습니다.' + error
      }
    },
  },
  mounted() {
    // this는 컴포넌트 인스턴스를 나타냄
    // console.log(Boolean(this.isButtonDisabled))

    const newObject = {}
    this.someObject = newObject
    console.log(newObject === this.someObject)

    let arr = [1, 2, 3]
    let arrChange = arr.map((x) => x * 2)
    console.log(arrChange)

    // < ref로 접근하기 >
    // this.$refs.input.focus()

    // < v-for 내부에서 ref 사용하기 >
    console.log(this.$refs.items)
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
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
