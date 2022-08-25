<template>
  <ckeditor
    id="editor"
    :editor="editor"
    v-model="editorData"
    :config="editorConfig"
  />
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
      height: "500px",
    },
  }),
};
</script>
<style>
.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
  min-height: 400px;
  margin-bottom: 20px;
}
</style>
