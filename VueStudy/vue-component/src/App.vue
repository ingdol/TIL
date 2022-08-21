<template>
  <div>
    <h2>키워드 input</h2>
    <p>키워드를 입력하고 엔터를 치면 하나의 태그가 형성되는 input</p>
    <keyword-input />
    <h2>추가 / 삭제 박스</h2>
    <p>원하는 문장을 추가하고 삭제하는 박스</p>
    <content-box />
    <h2>다중이미지 업로드</h2>
    <p>다중 이미지 선택 및 미리보기</p>
    <multi-img-upload />
    <h2>문서 편집기</h2>
    <p>tiptap 라이브러리 사용</p>
    <tiptap-editor />
    <p>Quill 라이브러리 사용</p>
    <quill-editor />
  </div>
</template>

<script>
import KeywordInput from "./components/KeywordInput.vue";
import ContentBox from "./components/ContentBox.vue";
import MultiImgUpload from "./components/MultiImgUpload.vue";
import TiptapEditor from "./components/TiptapEditor.vue";
import QuillEditor from "./components/QuillEditor.vue";

export default {
  name: "App",
  components: {
    KeywordInput,
    ContentBox,
    MultiImgUpload,
    TiptapEditor,
    QuillEditor,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
* {
  box-sizing: border-box;
}
</style>
