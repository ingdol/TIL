<template>
  <div>
    <QuillEditor v-model:content="content" contentType="html" theme="snow" />
    <button @click="conData">클릭</button>
  </div>
</template>

<script>
// https://vueup.github.io/vue-quill/api/#content
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default {
  data() {
    return {
      content: "<p><strong><u>dddd</u></strong></p>",
    };
  },
  components: {
    QuillEditor,
  },
  computed: {},
  methods: {
    conData() {
      console.log(this.content);
    },
  },
};
</script>

<style lang="scss" scoped></style>
