<template>
  <div class="keyword-input">
    <div
      class="keyword-input__tag"
      v-for="(keyword, index) in keywordArr"
      :key="index"
    >
      <div>{{ keyword }}</div>
    </div>
    <div class="keyword-input__input">
      <span v-show="addShap">#</span>
      <input
        v-model="inputValue"
        @focus="(addShap = true), (placeholder = false)"
        @blur="setPlaceholder"
        @keydown.enter="addKeyword"
        @keydown.delete="deleteKeyword"
        :placeholder="placeholder ? '엔터 키로 키워드를 구분합니다' : ''"
      />
    </div>
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
      placeholder: true,
    };
  },
  methods: {
    setPlaceholder() {
      this.addShap = false;
      this.inputValue = "";
      if (this.keywordArr.length === 0) this.placeholder = true;
    },
    addKeyword() {
      console.log(this.inputValue);
      let pushValue = "#" + this.inputValue;
      if (this.keywordArr.indexOf(pushValue) === -1)
        this.keywordArr.push(pushValue);
      this.inputValue = "";
      this.placeholder = "";
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

<style lang="scss" scoped>
.keyword-input {
  border: 2px solid #eee;
  width: 500px;
  height: 35px;
  line-height: 35px;
  padding: 0 5px;
  margin: 0 auto;
  overflow: hidden;
  div {
    float: left;
  }
  &__input {
    display: inline-flex;
    align-content: center;
    span {
      line-height: 30px;
    }
    input {
      border: none;
      line-height: 28px;
      &:focus {
        outline: none !important;
      }
    }
  }

  &__tag {
    background: rgba(154, 116, 169, 0.459);
    border-radius: 5px;
    margin-right: 5px;
    display: inline-block;
    line-height: 30px;
    padding: 0 5px;
    div {
      width: 100%;
    }
  }
}
</style>
