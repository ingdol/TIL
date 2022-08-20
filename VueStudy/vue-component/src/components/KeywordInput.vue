<template>
  <div class="keyword-input">
    <span
      class="keyword-input__tag"
      v-for="(keyword, index) in keywordArr"
      :key="index"
      >{{ keyword }}</span
    >
    <span v-show="addShap">#</span>
    <input
      v-model="inputValue"
      @focus="addShap = true"
      @blur="addShap = false"
      @keydown.enter="addKeyword"
      @keydown.delete="deleteKeyword"
    />
  </div>
</template>

<script>
export default {
  name: "KeywordInput",
  data() {
    return {
      inputValue: "",
      keywordArr: [],
      addShap: false,
    };
  },
  methods: {
    addKeyword() {
      console.log(this.inputValue);
      let pushValue = "#" + this.inputValue;
      if (this.keywordArr.indexOf(pushValue) === -1)
        this.keywordArr.push(pushValue);
      this.inputValue = "";
    },
    deleteKeyword() {
      console.log("여기 실행염");
      if (this.inputValue.length === 0) {
        this.keywordArr.pop();
      }
    },
  },
};
</script>

<style scoped>
.keyword-input {
  border: 1px solid #eee;
  width: 500px;
  height: 50px;
  line-height: 50px;
  display: flex;
}
input {
  border: none;
}
input:focus {
  outline: none !important;
}
.keyword-input__tag {
  background: rgba(217, 127, 252, 0.459);
  border-radius: 10px;
  padding: 5px;
  height: 20px;
}
</style>
