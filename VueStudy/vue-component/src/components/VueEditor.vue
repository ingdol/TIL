<template>
  <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" />
</template>

<script>
// https://picory.com/457
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-vue";

export default {
  name: "CKEditor",
  components: {
    ckeditor: CKEditor.component,
  },
  data: () => ({
    editor: ClassicEditor,
    editorData: "",
    editorConfig: {
      // The configuration of the editor.
      width: 850,
      language: "ko",
    },
  }),
};
</script>
<style scoped>
.ck-editor__editable {
  min-height: 500px;
}
</style>
