<template>
  <!-- < 텍스트 보간법 > -->
  <span>메시지: {{ msg }}</span>

  <!-- < HTML 출력 > -->
  <!-- 앞에 v가 붙이면 디렉티브 -->
  <!-- {{}}는 데이터를 text로 받기 때문에 v-html로 html 사용 가능 -->
  <!-- 하지만 v-html은 보안 문제로, 되도록이면 적게 사용해야 함 -->
  <p>텍스트 보간법 사용: {{ rawHtml }}</p>
  <p>v-html 디렉티브 사용: <span v-html="rawHtml"></span></p>

  <!-- [ 템플릿 문법 ] -->
  <!-- 1. 속성 바인딩 -->
  <!-- 1-1. html 내에 바인딩 -->
  <div v-bind:id="dynamicId"></div>
  <!-- 1-2. 단축 문법 -->
  <div :id="dynamicId"></div>
  <!-- 1-3. 불리언 속성 -->
  <!-- 불리언 속성 중 하나인 disabled를 사용하면 -->
  <!-- isButtonDisabled의 값이 truthy인 경우 속성이 표기됨 -->
  <!-- 근데 falsy인 ''는 왜 disabled=true가 될까? -->
  <button :disabled="isButtonDisabled">버튼</button>
  <!-- 1-4. 여러 속성을 동적으로 바인딩 -->
  <div v-bind="objectOfAttrs"></div>

  <!-- 2. JavaScript 표현식 사용 -->
  <!-- 2-1. 하나의 표현식만 가능 -->
  <!-- 2-1-1. 선언식 말고 표현식만 가능 -->
  <!-- {{ number + 1 }} -->
  <!-- 2-1-2. if문 말고 삼항 표현식 사용  -->
  <!-- {{ ok ? '예' : '아니오' }} -->
  <!-- 예) -->
  <!--  {{ message.split('').reverse().join('') }}
        <div :id="`list-${id}`"></div>  -->

  <!-- 3. 함수 호출 -->
  <!-- 바인딩 표현식 내부에서 컴포넌트에서 노출하는 메서드를 호출할 수 있음 -->
  <!-- <span :title="toTitleDate(date)">
    {{ formatDate(date) }}
  </span> -->
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: '텍스트 보간법',
      rawHtml: '<span style="color: red">이것은 빨간색이어야 합니다.</span>',
      isButtonDisabled: '',

      // 여러 속성을 동적으로 바인딩
      objectOfAttrs: {
        id: 'container',
        class: 'wrapper',
      },
    }
  },
  components: {},
  mounted() {
    console.log(Boolean(this.isButtonDisabled))
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
