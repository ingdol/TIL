// createApp 함수를 사용하여 새로운 앱 인스턴스 생성
import { createApp } from 'vue'

// 싱글 파일 컴포넌트에서 최상위 컴포넌트 앱을 가져옴
import App from './App.vue'

// <최상위 컴포넌트>
const app = createApp(App)

// <앱 마운트>
// 앱 인스턴스는 .mount() 메서드가 호출될 때까지 아무 것도 렌더링하지 않음
// 컨테이너가 될 실제 DOM 엘리먼트 또는 셀럭터 문자열을 인수로 필요함
app.mount('#app')
