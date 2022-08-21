<template>
  <div class="content-box">
    <div>
      <p
        class="content-box__item"
        :class="content === selectItem && 'content-box__item--select'"
        v-for="(content, index) of contentList"
        :key="index"
        @click="selectItem = content"
      >
        {{ content }}
      </p>
    </div>
    <div>
      <button @click="addContent">add</button
      ><button @click="delContent">del</button>
    </div>
    <div>
      <p
        class="content-box__item"
        :class="content === deleteItem && 'content-box__item--select'"
        v-for="(content, index) of addContentList"
        :key="index"
        @click="deleteItem = content"
      >
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentBox",
  data() {
    return {
      selectItem: "",
      deleteItem: "",
      setContentList: [],
      addContentList: [],
    };
  },
  computed: {
    contentList() {
      let option = ["아침을 가볍게! 피부 관리법", "피부 결은 어떻게 판단할까?"];
      return option;
    },
  },
  methods: {
    setContent(item) {
      console.log(item);
      let index = this.setContentList.indexOf(item);
      if (index === -1) this.setContentList.push(item);
      else this.setContentList.splice(index, 1);
      console.log(this.setContentList);
    },
    addContent() {
      let index = this.addContentList.indexOf(this.selectItem);
      console.log(index);
      if (index === -1 && this.selectItem.length !== 0)
        this.addContentList.push(this.selectItem);
      this.selectItem = "";
      console.log(this.addContentList);
    },
    delContent() {
      let index = this.addContentList.indexOf(this.deleteItem);
      console.log(index);
      if (index !== -1) this.addContentList.splice(index, 1);
      this.deleteItem = "";
      console.log(this.addContentList);
    },
  },
};
</script>

<style lang="scss" scoped>
.content-box {
  border: 2px solid #eee;
  display: flex;
  &__item {
    border: 2px solid #eee;
    &--select {
      background: #eee;
    }
  }
}
</style>
